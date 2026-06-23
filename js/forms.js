(function () {
  const cfg = window.KORA_SITE_CONFIG || {};
  const recaptchaSiteKey = (cfg.recaptchaSiteKey || '').trim();
  let recaptchaLoadPromise = null;

  function loadRecaptchaScript() {
    if (typeof grecaptcha !== 'undefined') return Promise.resolve();
    if (recaptchaLoadPromise) return recaptchaLoadPromise;

    recaptchaLoadPromise = new Promise(function (resolve, reject) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.dataset.koraRecaptcha = 'true';
      script.onload = function () { resolve(); };
      script.onerror = function () { reject(new Error('Failed to load reCAPTCHA')); };
      document.head.appendChild(script);
    });

    return recaptchaLoadPromise;
  }

  async function ensureRecaptchaReady(form) {
    const recaptchaEl = form.querySelector('.g-recaptcha');
    if (!recaptchaEl || !recaptchaSiteKey) return false;
    recaptchaEl.setAttribute('data-sitekey', recaptchaSiteKey);

    try {
      await loadRecaptchaScript();
    } catch {
      return false;
    }

    return typeof grecaptcha !== 'undefined';
  }

  function collectFormData(form) {
    const formData = new FormData(form);
    const result = {};

    formData.forEach(function (value, key) {
      if (key === 'g-recaptcha-response') return;
      result[key] = typeof value === 'string' ? value.trim() : value;
    });

    return result;
  }

  function showMessage(form, text, isError) {
    const messageEl = form.querySelector('[data-form-message]');
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.style.color = isError ? '#ef4444' : '#16a34a';
  }

  function setSubmitting(form, isSubmitting) {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;

    if (isSubmitting) {
      button.dataset.originalText = button.textContent.trim() || 'Submit';
      button.textContent = 'Sending...';
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalText || 'Submit';
      button.disabled = false;
    }
  }

  function validate(form, data) {
    if (!data.name || !data.email || !data.message) {
      showMessage(form, 'Please fill out all required fields.', true);
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      showMessage(form, 'Please enter a valid email address.', true);
      return false;
    }

    return true;
  }

  async function submitPublicForm(form) {
    const formType = form.dataset.formType || 'contact';
    const data = collectFormData(form);
    const apiBaseUrl = (cfg.apiBaseUrl || '').replace(/\/+$/, '');
    const businessId = cfg.businessId;

    if (!validate(form, data)) return;

    if (!apiBaseUrl || !businessId || !recaptchaSiteKey) {
      showMessage(form, 'Form is temporarily unavailable. Please try again later.', true);
      return;
    }

    const recaptchaReady = await ensureRecaptchaReady(form);
    if (!recaptchaReady) {
      showMessage(form, 'Security check loading—please try again.', true);
      return;
    }

    const token = grecaptcha.getResponse() || '';
    if (!token) {
      showMessage(form, 'Please complete the reCAPTCHA.', true);
      return;
    }

    setSubmitting(form, true);
    showMessage(form, 'Sending...', false);

    fetch(apiBaseUrl + '/api/v1/public/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        business_id: businessId,
        form_type: formType,
        form_data: data,
        submitter_email: data.email,
        captcha_token: token,
      }),
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Form submission failed');
      })
      .then(function () {
        form.reset();
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        showMessage(form, 'Thank you! Your message has been sent.', false);
      })
      .catch(function () {
        showMessage(form, 'Something went wrong. Please try again.', true);
      })
      .finally(function () {
        setSubmitting(form, false);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[data-form-type]').forEach(function (form) {
      if (form.dataset.koraFormBound === 'true') return;
      form.dataset.koraFormBound = 'true';
      form.addEventListener('focusin', function () {
        ensureRecaptchaReady(form).catch(function () {});
      }, { once: true });
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitPublicForm(form);
      });
    });
  });
})();
