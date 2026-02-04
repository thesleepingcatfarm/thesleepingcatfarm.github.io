/* ─── HELPERS ─── */

/** Build a WhatsApp link for a given message */
function whatsappLink(msg) {
  return `https://wa.me/${SITE_CONFIG.brand.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/** Find a product object by its slug */
function getProduct(slug) {
  return SITE_CONFIG.products.find(p => p.slug === slug);
}

/** Determine the relative path prefix based on current page location.
 *  Homepage is at root; inner pages are in /pages/ so they need "../" */
function pathPrefix() {
  return window.location.pathname.includes('/pages/') ? '../' : '';
}


/* ─── BRAND & HERO ─── */
function renderBrand() {
  const b = SITE_CONFIG.brand;
  document.querySelectorAll('.nav-logo').forEach(el => el.textContent = b.name);
  /*
  document.getElementById('hero-tag')   && (document.getElementById('hero-tag').textContent   = b.tagline);
  document.getElementById('hero-title') && (document.getElementById('hero-title').innerHTML   = b.heroTitle);
  document.getElementById('hero-sub')   && (document.getElementById('hero-sub').textContent   = b.heroSub);
  document.getElementById('hero-cta')   && (document.getElementById('hero-cta').textContent   = b.heroCTA);
  */
}


/* ─── NAVIGATION (with dropdown support) ─── */
function renderNav() {
  const ul = document.getElementById('nav-links');
  if (!ul) return;

  const prefix = pathPrefix();

  ul.innerHTML = SITE_CONFIG.nav.map(item => {
    const href = item.href.startsWith('#') ? item.href : prefix + item.href;
    return `<li><a href="${href}">${item.label}</a></li>`;
  }).join('');
}


/* ─── MARQUEE ─── */
function renderMarquee() {
  const el = document.getElementById('marquee-track');
  if (!el) return;
  const row = SITE_CONFIG.marquee.map(t => `<span>${t} <span class="dot">◆</span></span>`).join('');
  el.innerHTML = row + row;   // duplicate for seamless loop
}


/* ─── STORY / ABOUT ─── */
function renderStory() {
  const s = SITE_CONFIG.story;
  const label = document.getElementById('story-label');
  const title = document.getElementById('story-title');
  const body  = document.getElementById('story-body');
  if (label) label.textContent = s.label;
  if (title) title.innerHTML   = s.title;
  if (body)  body.textContent  = s.body;

  const pillarsEl = document.getElementById('story-pillars');
  if (!pillarsEl) return;
  pillarsEl.innerHTML = s.pillars.map(p =>
    `<div class="pillar reveal">
       <h4>${p.title}</h4>
       <p>${p.desc}</p>
     </div>`
  ).join('');
}


/* ─── PRODUCT COLLECTION (full 6-card grid) ─── */
function renderProducts() {
  const grid = document.getElementById('cheese-grid');
  if (!grid) return;

  grid.innerHTML = SITE_CONFIG.products.map(product => {
    const detailUrl = `pages/product-${product.slug}.html`;

    return `<a href="${detailUrl}" class="product-mini-card mini-${product.cardStyle} reveal" style="text-decoration:none; color:inherit;">
              <div class="mini-card-img">
                <div class="mini-card-bg"></div>
                <div class="mini-wheel"></div>
              </div>
              <div class="mini-card-body">
                <div class="mini-type">${product.type}</div>
                <h4>${product.name}</h4>
                <div class="mini-price">${product.price}</div>
              </div>
            </a>`;
  }).join('');
}

function renderProductsHTML() {
  const grid = document.getElementById('cheese-grid');
  if (!grid) return;

  grid.innerHTML = SITE_CONFIG.products.map(product => {
    const detailUrl = `product-${product.slug}.html`;

    return `<a href="${detailUrl}" class="product-mini-card mini-${product.cardStyle} reveal" style="text-decoration:none; color:inherit;">
              <div class="mini-card-img">
                <div class="mini-card-bg"></div>
                <div class="mini-wheel"></div>
              </div>
              <div class="mini-card-body">
                <div class="mini-type">${product.type}</div>
                <h4>${product.name}</h4>
                <div class="mini-price">${product.price}</div>
              </div>
            </a>`;
  }).join('');
}


/* ─── SHARED: mini product row renderer ─── */
function renderProductRow(containerId, slugs) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = slugs.map(slug => {
    const p = getProduct(slug);
    if (!p) return '';
    const detailUrl = `pages/product-${p.slug}.html`;

    return `<a href="${detailUrl}" class="product-mini-card mini-${p.cardStyle} reveal" style="text-decoration:none; color:inherit;">
              <div class="mini-card-img">
                <div class="mini-card-bg"></div>
                <div class="mini-wheel"></div>
              </div>
              <div class="mini-card-body">
                <div class="mini-type">${p.type}</div>
                <h4>${p.name}</h4>
                <div class="mini-price">${p.price}</div>
              </div>
            </a>`;
  }).join('');
}


/* ─── PROCESS ─── */
function renderProcess() {
  const p = SITE_CONFIG.process;
  const label = document.getElementById('process-label');
  const title = document.getElementById('process-title');
  const desc  = document.getElementById('process-desc');
  if (label) label.textContent = p.label;
  if (title) title.innerHTML   = p.title;
  if (desc)  desc.textContent  = p.desc;

  const stepsEl = document.getElementById('process-steps');
  if (!stepsEl) return;
  stepsEl.innerHTML = p.steps.map(step =>
    `<div class="step reveal">
       <div class="step-number">${step.number}</div>
       <h4>${step.title}</h4>
       <p>${step.desc}</p>
     </div>`
  ).join('');
}


/* ─── FEATURED / SIGNATURE ─── */
function renderFeatured() {
  const f = SITE_CONFIG.featured;
  const label = document.getElementById('featured-label');
  const title = document.getElementById('featured-title');
  const desc  = document.getElementById('featured-desc');
  const cta   = document.getElementById('featured-cta');
  if (label) label.textContent = f.label;
  if (title) title.innerHTML   = f.title;
  if (desc)  desc.textContent  = f.desc;

  // CTA links to WhatsApp
  if (cta) {
    cta.textContent = f.cta;
    cta.href = whatsappLink(f.whatsappMsg);
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
  }

  // Details row
  const detailsEl = document.getElementById('featured-details');
  if (detailsEl) {
    detailsEl.innerHTML = f.details.map(d =>
      `<div class="feat-detail-item">
         <h5>${d.label}</h5>
         <p>${d.value}</p>
       </div>`
    ).join('');
  }

  // Visual: swap in a photo if provided
  const visual = document.getElementById('featured-visual');
  if (visual && f.image) {
    visual.innerHTML = `<img src="${f.image}" alt="${f.title.replace(/<[^>]*>/g,'')}" class="featured-photo" />`;
  }
}


/* ─── TESTIMONIALS ─── */
function renderTestimonials() {
  const grid = document.getElementById('testimonial-grid');
  if (!grid) return;

  grid.innerHTML = SITE_CONFIG.testimonials.map(t =>
    `<div class="testimonial-card reveal">
       <div class="stars">★ ★ ★ ★ ★</div>
       <blockquote>"${t.quote}"</blockquote>
       <div class="author">${t.author}, ${t.location}</div>
     </div>`
  ).join('');
}


/* ─── SUBSCRIPTION CTA (homepage banner) ─── */
function renderSubscription() {
  const s = SITE_CONFIG.subscription;
  const label = document.getElementById('sub-label');
  const title = document.getElementById('sub-title');
  const desc  = document.getElementById('sub-desc');
  const cta   = document.getElementById('sub-cta');
  if (label) label.textContent = s.label;
  if (title) title.innerHTML   = s.title;
  if (desc)  desc.textContent  = s.desc;
  if (cta)   { cta.textContent = s.cta; cta.href = pathPrefix() + 'pages/subscription.html'; }
}


/* ─── SOCIAL LINKS ─── */
function renderSocial() {
  const links = SITE_CONFIG.social;
  const prefix = pathPrefix();

  // Dedicated social section
  const socialSection = document.getElementById('social-grid');
  if (socialSection) {
    socialSection.innerHTML = links.map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-card reveal">
         <div class="social-icon-wrap">
           <img src="${prefix}assets/icons/${s.icon}" alt="${s.label}" class="social-icon" />
         </div>
         <span class="social-label">${s.label}</span>
       </a>`
    ).join('');
  }

  const footerSocialLogo = document.getElementById('footer-social-logo');
  if (footerSocialLogo) {
    footerSocialLogo.innerHTML = links.map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
         <img src="${prefix}assets/icons/${s.icon}" alt="${s.label}" class="footer-social-icon" />
       </a>`
    ).join('');
  }

  // Footer bottom bar
  const footerSocial = document.getElementById('footer-social');
  if (footerSocial) {
    footerSocial.innerHTML = links.map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
         <img src="${prefix}assets/icons/${s.icon}" alt="${s.label}" class="footer-social-icon" />
         <span>${s.label}</span>
       </a>`
    ).join('');
  }
}


/* ─── CONTACT SECTION ─── */
function renderContact() {
  const c = SITE_CONFIG.contact;
  const el = document.getElementById('contact-email');
  if (el) el.textContent = c.email;
  const ph = document.getElementById('contact-phone');
  if (ph) ph.textContent = c.phone;
  const addr = document.getElementById('contact-address');
  if (addr) addr.textContent = c.address;
  const wp = document.getElementById('contact-whatsapp');
  if (wp) { wp.textContent = c.phone; wp.href = `https://wa.me/${c.whatsapp}`; }
}


/* ─── GOOGLE MAPS ─── */
function renderMap() {
  const m = SITE_CONFIG.map;
  const section = document.getElementById('location');
  if (!section) return;

  if (!m.enabled) { section.style.display = 'none'; return; }
  section.style.display = 'block';

  const label   = document.getElementById('map-label');
  const title   = document.getElementById('map-title');
  const desc    = document.getElementById('map-desc');
  const address = document.getElementById('map-address');
  if (label)   label.textContent   = m.label;
  if (title)   title.innerHTML     = m.title;
  if (desc)    desc.textContent    = m.desc;
  if (address) address.textContent = m.address;

  // Check if we have a valid API key
  const mapContainer = document.getElementById('map-container');
  if (!mapContainer) return;

  if (!m.apiKey || m.apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
    // Fallback: Show a clickable Google Maps link
    const googleMapsUrl = `https://www.google.com/maps?q=${m.lat},${m.lng}`;
    mapContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #7a8b6f 0%, #5a6852 100%); border-radius: 8px; position: relative; overflow: hidden;">
        <div style="position: absolute; inset: 0; background: url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'.06\\'/%3E%3C/svg%3E'); pointer-events: none;"></div>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="z-index: 1; text-decoration: none; display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem; text-align: center;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9AA6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span style="color: #C9AA6A; font-size: 1.1rem; font-weight: 500; letter-spacing: 0.05em;">View on Google Maps</span>
          <span style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">${m.address}</span>
        </a>
      </div>
    `;
    return;
  }

  // Load actual Google Maps if API key is provided
  if (!document.getElementById('google-maps-script')) {
    const script = document.createElement('script');
    script.id   = 'google-maps-script';
    script.src  = `https://maps.googleapis.com/maps/api/js?key=${m.apiKey}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
  }
}

window.initMap = function () {
  const m = SITE_CONFIG.map;
  const mapEl = document.getElementById('map-container');
  if (!mapEl) return;
  new google.maps.Map(mapEl, {
    center: { lat: m.lat, lng: m.lng }, zoom: m.zoom,
    styles: [
      { featureType:"landscape", stylers:[{color:"#f5f0e8"}] },
      { featureType:"road",      stylers:[{color:"#d4b48c"}] },
      { featureType:"poi",       stylers:[{visibility:"off"}] },
      { featureType:"water",     stylers:[{color:"#c5d5c5"}] },
    ],
  });
  new google.maps.Marker({
    position: { lat: m.lat, lng: m.lng },
    title:    SITE_CONFIG.brand.name,
    icon: { path: google.maps.SymbolPath.CIRCLE, fillColor:'#b8956a', fillOpacity:1, strokeColor:'#3d2b1f', strokeWeight:2, scale:10 },
  });
};


/* ─── FOOTER ─── */
function renderFooter() {
  const f = SITE_CONFIG.footer;
  const prefix = pathPrefix();


  const copyright = document.getElementById('footer-copyright');
  if (copyright) copyright.textContent = f.copyright;


  // Dynamic link columns
  const columnsEl_1 = document.getElementById('footer-columns-1');
  if (!columnsEl_1) return;
  columnsEl_1.innerHTML = f.columns_1.map(col => {
    const linksHtml_1 = col.links.map(l => {
      const href = l.href.startsWith('#') ? l.href : prefix + l.href;
      return `<li><a href="${href}">${l.label}</a></li>`;
    }).join('');
    return `<div><h5>${col.heading}</h5><ul>${linksHtml_1}</ul></div>`;
  }).join('');

  const columnsEl_2 = document.getElementById('footer-columns-2');
  if (!columnsEl_2) return;
  columnsEl_2.innerHTML = f.columns_2.map(col => {
    const linksHtml_2 = col.links.map(l => {
      const href = l.href.startsWith('#') ? l.href : prefix + l.href;
      return `<li><a href="${href}">${l.label}</a></li>`;
    }).join('');
    return `<div><h5>${col.heading}</h5><ul>${linksHtml_2}</ul></div>`;
  }).join('');
}


/* ═══════════════════════════════════════════
   MASTER INIT
   ═══════════════════════════════════════════ */
function renderAll() {
  renderNav();
  renderBrand();
  renderMarquee();
  renderStory();
  renderProducts();
  renderProcess();
  renderFeatured();
  renderTestimonials();
  renderSubscription();
  renderSocial();
  renderContact();
  renderMap();
  renderFooter();
}
