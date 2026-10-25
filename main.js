const servicesGrid = document.getElementById('services-grid');
const packagesGrid = document.getElementById('packages-grid');
const rotatingService = document.getElementById('rotating-service');
const featuredReview = document.getElementById('featured-review');
const reviewDots = document.getElementById('review-dots');
const bookingModal = document.getElementById('booking-modal');
const modalClose = document.getElementById('modal-close');
const rotatingServices = ['Tinting', 'Brow Shaping', 'Lash Lift', 'Henna', 'Full Face'];
const reviews = [
  {
    name: 'Cristina Perez',
    source: 'Google review',
    text: 'Love love love this place! I have gotten many services done here but two things I always go back for are my eyebrows and my Brazilian wax. They do amazing. When it comes to beauty services they have it all.'
  },
  {
    name: 'priya desai',
    source: 'Google review',
    text: 'I m coming over here full body wax and face overall everything is best!!'
  },
  {
    name: 'Love Gertrude',
    source: 'Google review',
    text: 'She do a great job!!!'
  },
  {
    name: 'Jasmine Abdelhamid',
    source: 'Google review',
    text: 'Hina is amazing she always does my eyebrows good I highly recommend!'
  },
  {
    name: 'Victoria Leon',
    source: 'Google review',
    text: 'I had a great experience with Hina Patel. She has been doing my eyebrows for almost 2 years, and she always does an amazing job. She is professional, kind, and pays so much attention to detail. My eyebrows always come out clean, beautifully shaped, and exactly how I want them.'
  }
];

const services = [
  { category: 'Threading', name: 'Eyebrow' },
  { category: 'Threading', name: 'Eyebrow with the mapping' },
  { category: 'Threading', name: 'Forehead' },
  { category: 'Threading', name: 'Upper Lips' },
  { category: 'Threading', name: 'Chin' },
  { category: 'Threading', name: 'Neck' },
  { category: 'Threading', name: 'Sideburn' },
  { category: 'Threading', name: 'Full Face' },
  { category: 'Tinting', name: 'Eyebrow Tint' },
  { category: 'Tinting', name: 'Organic Eyebrow Tint' },
  { category: 'Tinting', name: 'Lash Tint' },
  { category: 'Tinting', name: 'Henna Tattoo' },
  { category: 'Facial', name: 'Express Facial' },
  { category: 'Facial', name: 'Deluxe Facial' },
  { category: 'Facial', name: 'Whitening Facial' },
  { category: 'Facial', name: 'Glow Facial' },
  { category: 'Facial', name: 'Acne Facial' },
  { category: 'Facial', name: 'Anti-Aging Facial' },
  { category: 'Facial', name: 'CBD Facial' },
  { category: 'Facial', name: 'Murad Facial' },
  { category: 'Facial', name: 'Microdermabrasion' },
  { category: 'Facial', name: 'Face Polish' },
  { category: 'Lash', name: 'Strip Lash' },
  { category: 'Lash', name: 'Individual Cluster' },
  { category: 'Lash', name: 'Natural Lash' },
  { category: 'Lash', name: 'Sami Lash' },
  { category: 'Lash', name: 'Lash Lift' },
  { category: 'Lash', name: 'Eyebrows Lamination' },
  { category: 'Lash', name: 'Lash Removal' },
  { category: 'Waxing', name: 'Half Arms' },
  { category: 'Waxing', name: 'Full Arms' },
  { category: 'Waxing', name: 'Under Arms' },
  { category: 'Waxing', name: 'Half Legs' },
  { category: 'Waxing', name: 'Full Legs' },
  { category: 'Waxing', name: 'Vajacial' },
  { category: 'Waxing', name: 'Skin Tag Remove' }
];

const packages = [
  {
    name: 'Brow Refresh',
    description: 'Eyebrow threading with optional brow tint or henna for a cleaner, more defined look.',
    includes: ['Eyebrow threading', 'Brow tint or henna', 'Ask about mapping']
  },
  {
    name: 'Lash & Brow Combo',
    description: 'A polished eye-area appointment for brows and lashes before an event or weekly refresh.',
    includes: ['Lash lift or lash tint', 'Eyebrow threading', 'Eyebrow lamination available']
  },
  {
    name: 'Face Glow Visit',
    description: 'A simple way to pair skincare and facial hair removal in one visit.',
    includes: ['Facial service', 'Full face threading', 'Face polish available']
  },
  {
    name: 'Waxing Essentials',
    description: 'Popular waxing services grouped for clients who want multiple areas handled together.',
    includes: ['Under arms', 'Arms or legs', 'Bikini or Brazilian available']
  }
];

function serviceMenu(category, items) {
  return `
    <details class="service-group" ${category === 'Threading' ? 'open' : ''}>
      <summary>
        <span>${category}</span>
        <small>${items.length} services</small>
      </summary>
      <ul>
        ${items.map((service) => `<li>${service.name}</li>`).join('')}
      </ul>
    </details>
  `;
}

function packageCard(servicePackage) {
  return `
    <article class="package-card">
      <h3>${servicePackage.name}</h3>
      <p>${servicePackage.description}</p>
      <ul>
        ${servicePackage.includes.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <button type="button" class="package-book js-book-now">Ask About This</button>
    </article>
  `;
}

function loadServices() {
  const grouped = services.reduce((acc, service) => {
    acc[service.category] = acc[service.category] || [];
    acc[service.category].push(service);
    return acc;
  }, {});

  packagesGrid.innerHTML = packages.map(packageCard).join('');
  servicesGrid.innerHTML = Object.entries(grouped)
    .map(([category, items]) => serviceMenu(category, items))
    .join('');
}

loadServices();

function openBookingModal() {
  if (!bookingModal) return;
  bookingModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalClose?.focus();
}

function closeBookingModal() {
  if (!bookingModal) return;
  bookingModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function bindBookingButtons() {
  document.querySelectorAll('.js-book-now').forEach((button) => {
    button.addEventListener('click', openBookingModal);
  });
}

bindBookingButtons();

modalClose?.addEventListener('click', closeBookingModal);
bookingModal?.addEventListener('click', (event) => {
  if (event.target === bookingModal) closeBookingModal();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeBookingModal();
});

function renderReview(index) {
  if (!featuredReview || !reviewDots) return;

  const review = reviews[index];
  featuredReview.classList.add('is-changing');

  window.setTimeout(() => {
    featuredReview.innerHTML = `
      <div class="review-topline">
        <p class="review-stars">★★★★★</p>
        <p class="review-source">${review.source}</p>
      </div>
      <p class="review-text">"${review.text}"</p>
      <p class="review-name">${review.name}</p>
    `;

    [...reviewDots.children].forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });

    featuredReview.classList.remove('is-changing');
  }, 180);
}

if (featuredReview && reviewDots) {
  let reviewIndex = 0;

  reviewDots.innerHTML = reviews
    .map((review, index) => `<button type="button" aria-label="Show review from ${review.name}" data-review-index="${index}"></button>`)
    .join('');

  reviewDots.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    reviewIndex = Number(button.dataset.reviewIndex);
    renderReview(reviewIndex);
  });

  renderReview(reviewIndex);

  window.setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    renderReview(reviewIndex);
  }, 5200);
}

if (rotatingService) {
  let serviceIndex = 0;

  setInterval(() => {
    rotatingService.classList.add('is-changing');

    window.setTimeout(() => {
      serviceIndex = (serviceIndex + 1) % rotatingServices.length;
      rotatingService.textContent = rotatingServices[serviceIndex];
      rotatingService.classList.remove('is-changing');
    }, 280);
  }, 2200);
}
