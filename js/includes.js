const JAIPORE_LOGO = 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/baf7c43c-6d3d-419a-a4bb-284a47e2ac01/de8c94d8-887e-4625-825f-ec262dbc28df/1781245809_m58x0r.png';

function pageHref(hash) {
  return window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/')
    ? hash
    : 'index.html' + hash;
}

const HEADER_HTML = `
<nav class="fixed w-full z-50 glass-nav border-b border-neutral-800">
  <div class="site-nav-inner w-full px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <a aria-label="Jaipore Xpress home" class="flex items-center space-x-3 hover:opacity-90 transition-opacity" href="index.html" id="site-logo-home">
        <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <img alt="Jaipore Xpress logo" class="w-full h-full object-contain" decoding="async" height="175" loading="lazy" src="${JAIPORE_LOGO}" width="175"/>
        </div>
        <span class="font-display text-2xl font-bold text-white tracking-wide">Jaipore<span class="text-gold">Xpress</span></span>
      </a>
      <div class="nav-desktop">
        <a class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider" href="${pageHref('#about')}">About</a>
        <a class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider" href="${pageHref('#menu')}">Menu</a>
        <a class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider" href="${pageHref('#locations')}">Locations</a>
        <a class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider" href="${pageHref('#gallery')}">Gallery</a>
        <a class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider" href="catering.html">Catering</a>
        <a class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider" href="hiring.html">Hiring</a>
        <div class="relative group">
          <button class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider inline-flex items-center gap-1" type="button">
            Gift Card
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
          </button>
          <div class="absolute left-0 mt-3 w-56 rounded-md border border-neutral-800 bg-neutral-900/95 backdrop-blur p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporexpress/giftcards" rel="noopener noreferrer" target="_blank">Ridgefield</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporepressny2/giftcards" rel="noopener noreferrer" target="_blank">Briarcliff</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaipore-express-guilford/giftcards" rel="noopener noreferrer" target="_blank">Guilford</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporebedford/giftcards" rel="noopener noreferrer" target="_blank">Bedford</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://order.toasttab.com/egiftcards/jaiporebrookfield" rel="noopener noreferrer" target="_blank">Brookfield</a>
          </div>
        </div>
        <div class="relative group">
          <button class="text-neutral-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider inline-flex items-center gap-1" type="button">
            Subscribe
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
          </button>
          <div class="absolute left-0 mt-3 w-56 rounded-md border border-neutral-800 bg-neutral-900/95 backdrop-blur p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporexpress/marketing-signup" rel="noopener noreferrer" target="_blank">Ridgefield</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporepressny2/marketing-signup" rel="noopener noreferrer" target="_blank">Briarcliff</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaipore-express-guilford/marketing-signup" rel="noopener noreferrer" target="_blank">Guilford</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporebedford/marketing-signup" rel="noopener noreferrer" target="_blank">Bedford</a>
            <a class="block px-3 py-2 text-sm text-neutral-200 hover:text-gold hover:bg-neutral-800 rounded" href="https://www.toasttab.com/jaiporebrookfield/marketing-signup" rel="noopener noreferrer" target="_blank">Brookfield</a>
          </div>
        </div>
        <a class="btn-cta-outline border-2 border-gold px-6 py-2.5 rounded-none font-semibold flex items-center gap-2 transition-colors" href="${pageHref('#order-online')}">
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Order Now
        </a>
      </div>
      <button class="nav-mobile-toggle text-white" type="button" data-mobile-menu-toggle aria-label="Toggle navigation menu">
        <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
      </button>
    </div>
  </div>
  <div class="nav-mobile-menu hidden bg-neutral-900 border-t border-neutral-800" id="mobile-menu">
    <div class="px-4 pt-2 pb-6 space-y-1">
      <a class="block px-3 py-3 text-neutral-300 hover:text-gold" href="${pageHref('#about')}">About</a>
      <a class="block px-3 py-3 text-neutral-300 hover:text-gold" href="${pageHref('#menu')}">Menu</a>
      <a class="block px-3 py-3 text-neutral-300 hover:text-gold" href="${pageHref('#locations')}">Locations</a>
      <a class="block px-3 py-3 text-neutral-300 hover:text-gold" href="${pageHref('#gallery')}">Gallery</a>
      <a class="block px-3 py-3 text-neutral-300 hover:text-gold" href="catering.html">Catering</a>
      <a class="block px-3 py-3 text-neutral-300 hover:text-gold" href="hiring.html">Hiring</a>
      <details class="px-3 py-2 text-neutral-300">
        <summary class="cursor-pointer hover:text-gold">Gift Card</summary>
        <div class="mt-2 ml-3 space-y-1 border-l border-neutral-700 pl-3">
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporexpress/giftcards" rel="noopener noreferrer" target="_blank">Ridgefield</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporepressny2/giftcards" rel="noopener noreferrer" target="_blank">Briarcliff</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaipore-express-guilford/giftcards" rel="noopener noreferrer" target="_blank">Guilford</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporebedford/giftcards" rel="noopener noreferrer" target="_blank">Bedford</a>
          <a class="block py-1 hover:text-gold" href="https://order.toasttab.com/egiftcards/jaiporebrookfield" rel="noopener noreferrer" target="_blank">Brookfield</a>
        </div>
      </details>
      <details class="px-3 py-2 text-neutral-300">
        <summary class="cursor-pointer hover:text-gold">Subscribe</summary>
        <div class="mt-2 ml-3 space-y-1 border-l border-neutral-700 pl-3">
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporexpress/marketing-signup" rel="noopener noreferrer" target="_blank">Ridgefield</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporepressny2/marketing-signup" rel="noopener noreferrer" target="_blank">Briarcliff</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaipore-express-guilford/marketing-signup" rel="noopener noreferrer" target="_blank">Guilford</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporebedford/marketing-signup" rel="noopener noreferrer" target="_blank">Bedford</a>
          <a class="block py-1 hover:text-gold" href="https://www.toasttab.com/jaiporebrookfield/marketing-signup" rel="noopener noreferrer" target="_blank">Brookfield</a>
        </div>
      </details>
      <div class="px-3 pt-8">
        <a class="btn-cta-outline border-2 border-gold px-6 py-3 rounded-none font-semibold flex items-center justify-center gap-2 w-full transition-colors" href="${pageHref('#order-online')}">
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Order Now
        </a>
      </div>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="bg-neutral-950 text-white py-16 border-t border-neutral-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <div class="col-span-2">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img alt="Jaipore Xpress logo" class="w-full h-full object-contain" decoding="async" height="175" loading="lazy" src="${JAIPORE_LOGO}" width="175"/>
          </div>
          <span class="font-display text-2xl font-bold tracking-wide">Jaipore<span class="text-gold">Xpress</span></span>
        </div>
        <p class="text-neutral-400 mb-6 max-w-md">Bringing authentic Indian flavors to Connecticut and New York. Experience the perfect blend of tradition and taste.</p>
        <div class="flex space-x-4">
          <a class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold hover:text-black transition-all" href="https://www.facebook.com/jaiporexpress/" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" focusable="false" viewbox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path></svg>
          </a>
          <a class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold hover:text-black transition-all" href="https://www.instagram.com/jaiporexpress/" rel="noopener noreferrer" target="_blank" aria-label="Instagram">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" focusable="false" viewbox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.069-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.8053.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6811 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6816-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path></svg>
          </a>
          <a aria-label="Google" class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold hover:text-black transition-all" href="https://maps.app.goo.gl/bHgEVaQ6c2wdRD5V9" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M21.35 11.1H12v2.98h5.38c-.47 2.5-2.67 3.78-5.37 3.78a5.86 5.86 0 0 1 0-11.72c1.54 0 2.94.55 4.02 1.46l2.26-2.26A9.02 9.02 0 0 0 12 3a9 9 0 0 0 0 18c5.2 0 8.64-3.65 8.64-8.8 0-.6-.06-.95-.14-1.1Z"></path></svg>
          </a>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-6 text-gold">Quick Links</h3>
        <ul class="space-y-3 text-neutral-400">
          <li><a class="hover:text-gold transition-colors" href="${pageHref('#about')}">About Us</a></li>
          <li><a class="hover:text-gold transition-colors" href="${pageHref('#menu')}">Our Menu</a></li>
          <li><a class="hover:text-gold transition-colors" href="${pageHref('#locations')}">Locations</a></li>
          <li><a class="hover:text-gold transition-colors" href="${pageHref('#gallery')}">Gallery</a></li>
          <li><a class="hover:text-gold transition-colors" href="catering.html">Catering</a></li>
          <li><a class="hover:text-gold transition-colors" href="hiring.html">Hiring</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-6 text-gold">Contact</h3>
        <ul class="space-y-3 text-neutral-400">
          <li>
            <a class="flex items-center gap-2 hover:text-gold transition-colors" href="mailto:info@jaiporect.com">
              <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              info@jaiporect.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
      <p>© 2024 Jaipore Xpress. All rights reserved.</p>
    </div>
  </div>
</footer>
<div class="kora-powered-by" style="display:flex;justify-content:flex-end;align-items:center;gap:0.35rem;padding:0.75rem 1rem;font-size:0.75rem;"><span style="color:#64748b">Powered by</span><a href="https://askkora.ai" target="_blank" rel="noopener noreferrer" style="text-decoration:none;font-weight:600;background:linear-gradient(135deg,#1E88E5,#7B1FA2);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Kora</a></div>
`;

function renderIncludes() {
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = HEADER_HTML;
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;

  const toggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

document.addEventListener('DOMContentLoaded', renderIncludes);
