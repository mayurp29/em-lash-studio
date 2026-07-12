const servicesGrid = document.getElementById('services-grid');
const rotatingService = document.getElementById('rotating-service');
const rotatingServices = ['Tinting', 'Brow Shaping', 'Lash Lift', 'Henna', 'Full Face'];

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
  { category: 'Waxing', name: 'Bikini Line' },
  { category: 'Waxing', name: 'Brazilian' },
  { category: 'Waxing', name: 'Vajacial' },
  { category: 'Waxing', name: 'Full Body' },
  { category: 'Waxing', name: 'Skin Tag Remove' }
];

function serviceCard(service) {
  return `
    <article class="service-card">
      <p class="service-category">${service.category}</p>
      <h3>${service.name}</h3>
    </article>
  `;
}

function loadServices() {
  servicesGrid.innerHTML = services.map(serviceCard).join('');
}

loadServices();

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
