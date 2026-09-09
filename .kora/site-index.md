# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: JAIPORE Xpress – Indian Eatery in Ridgefield, CT
purpose: The landing page — the whole restaurant on one page, carrying the full menu, all five locations, the gallery and the contact form.
sections:
- `#main-content` "A Taste of India, Served Fast & Fresh" — the page body, holding the hero carousel and every section below it
- `#hero-prev` and `#hero-next` — the hero carousel's previous and next controls
- `#about` "The To-Go Indian Experience" — what the restaurant is, and its three points: Authentic, Fresh, Made with Love
- `#menu` "Our Menu" — the menu section, holding the sticky category bar and the dish grid
- `#menu-sticky-container` — the wrapper that keeps the category bar in view while the grid scrolls
- `#menu-categories-bar` — the category filter, 15 categories: Starters, Street Side Chaat, Indo Chinese, Vegetarian, Vegan, Chicken, Lamb / Goat, Tandoori, Seafood, Rice Dishes, Sides, Breads, Desserts, House Drinks
- `#menu-grid` — every dish, 60 priced items: Lentil Soup, Veg Samosa, Pakhora, Lassoni Gobi, Kalmi Kabab, Luchi Bagari Jinga, Masala Dosa, Iddly, Imli Baingan, Samosa Chaat, Paapdi Chaat, Chilli Chicken, Chilli Paneer, Mango Chicken, Gobi Manchurian, Veg Fried Rice, Paneer Butter Masala, Malai Kofta, Navratan Korma, Saag Paneer, Matar Paneer, Daal Makhani, Aloo Gobi, Aloo Dhansak, Tadka Daal, Channa Masala, Jeera Aloo, Chicken Tikka Masala, Butter Chicken, Chicken Saag, Coondapur Chicken, Chicken Korma, Chicken Chettinad, Chicken Vindaloo, Chicken Aam Ras, Lamb Rogan Josh, Butter Lamb Masala, Lamb Madras, Lamb Korma, Lamb Saag, Lamb Vindaloo, Goat Curry, Chicken Tandoori, Chicken Malai Kabab, Shrimp Malai Kabab, Salmon Moilee, Chingiri Malai Curry, Shrimp Tadka Masala, Shrimp Aam Ras, Coconut Rice, Lemon Rice, Raita, Mixed Pickle, Mango Chutney, Pappadum
- `#locations` "Our Locations" — the five restaurants: Ridgefield, Briarcliff, Guilford, Bedford Hills, Brookfield
- `#order-online` "Get Jaipore Delivered" — the ordering block, listing the same five locations again
- `#gallery` "Gallery" — photographs of the food and the room
- `#contact` "Get In Touch" — the enquiry block
- `#contact-form` — the enquiry form
- `#name`, `#email`, `#message` — the form's fields
- `#form-message` — where the form's success or error message is written
- `#popup-modal` "Special Offer" — a promotional pop-up, with its heading in `#popup-heading` and its dismiss button in `#close-popup`
also: The five location names are written three times on this page — in the hero, in `#locations` and again in `#order-online` — as well as once per location page. Adding or closing a location is six edits, and nothing links the copies.
also: Biryani appears in the grid as five separate rows, one per protein, rather than one row with options. A change to how biryani is described has to be made five times.
also: The dish grid is filtered by the category bar above it. A dish's category lives in the markup of its own card, so moving a dish between categories is an edit to the card, not to the bar.

## ridgefield.html → /ridgefield
title: Jaipore Xpress Ridgefield, CT - Order Indian Food Online
purpose: The Ridgefield restaurant's page — its address, phone, hours and ordering links.
sections:
- `#main-content` "Ridgefield CT" — the page body carrying a description of this location, its Address, Phone and Hours, an ordering block naming UberEats, DoorDash and GrubHub, a gift-card block and a newsletter sign-up
also: The five location pages are near-identical in structure and wording, differing only in the town, the address, the phone number, the hours and one descriptive sentence. A change meant for one will look correct applied to any of them.
also: Each location's address, phone and hours are written here AND again inside `#locations` on index.html. Nothing shows the two disagreeing.

## briarcliff.html → /briarcliff
title: Jaipore Xpress Briarcliff, NY - Order Indian Food Online
purpose: The Briarcliff restaurant's page — its address, phone, hours and ordering links.
sections:
- `#main-content` "Briarcliff NY" — the page body carrying a description of this location, its Address, Phone and Hours, an ordering block, a gift-card block and a newsletter sign-up

## guilford.html → /guilford
title: Jaipore Xpress Guilford, CT - Order Indian Food Online
purpose: The Guilford restaurant's page — its address, phone, hours and ordering links.
sections:
- `#main-content` "Guilford CT" — the page body carrying a description of this location, its Address, Phone and Hours, an ordering block, a gift-card block and a newsletter sign-up

## bedford-hills.html → /bedford-hills
title: Jaipore Xpress Bedford Hills, NY - Order Indian Food Online
purpose: The Bedford Hills restaurant's page — its address, phone, hours and ordering links.
sections:
- `#main-content` "Bedford Hills NY" — the page body carrying a description of this location, its Address, Phone and Hours, an ordering block, a gift-card block and a newsletter sign-up

## brookfield.html → /brookfield
title: Jaipore Xpress Brookfield, CT - Order Indian Food Online
purpose: The Brookfield restaurant's page — its address, phone, hours and ordering links.
sections:
- `#main-content` "Brookfield CT" — the page body carrying a description of this location, its Address, Phone and Hours, an ordering block, a gift-card block and a newsletter sign-up

## catering.html → /catering
title: Catering - JAIPORE Xpress
purpose: The catering page — an enquiry form and nothing else.
sections:
- `#main-content` "Catering" — the page body, holding only the enquiry form
- `#name`, `#phone`, `#email` — the form's contact fields
- `#eventType` — the event type select: Corporate, Birthday, Graduation, Wedding, Party, Other
- `#guestCount` — the guest count field
- `#dateTime` — the preferred date and time field
- `#message` — the form's message field
also: The page describes no catering offer at all — no packages, no dishes, no minimums, no prices. It is a form with a heading, so a visitor has to already know what they are asking for.

## hiring.html → /hiring
title: Hiring - JAIPORE Xpress
purpose: The careers page — an application form and nothing else.
sections:
- `#main-content` "Hiring" — the page body, holding only the application form
- `#name`, `#phone`, `#email` — the form's contact fields
- `#position` — the role select: Server, Host, Kitchen Staff, Prep Cook, Dishwasher, Manager, Other
- `#startDate` — the available start date field
- `#availability` — the availability field
- `#message` — the experience field
also: No role is described anywhere on the page and none is advertised as open. The select lists every role the restaurant has, whether or not it is hiring for it.
also: The catering and hiring pages share the same field ids — name, phone, email, message — so a change described only by an id could match either page.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `robots.txt` — crawler rules and the sitemap link — derived from the site by the deploy, not written by hand
- `sitemap.xml` — the list of page URLs — derived from the site by the deploy, not written by hand
- `assets/site-pages.css` — styling for the location, catering and hiring pages
- `js/forms.js` — form submission and the captcha
- `js/includes.js` — the header, navigation and footer markup, the logo and the nav labels  [content]

## shared (every page)
The header, navigation, mobile menu and footer are NOT in the pages. They are rendered at
load by `js/includes.js`, which is where every change to the shared chrome has to be made. Editing a
page's markup to change the header will appear to do nothing, because there is no header in
it to change.
