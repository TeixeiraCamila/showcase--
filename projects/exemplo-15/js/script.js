// Mobile menu toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const body = document.body;

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
}

// Function to scroll to CTA section
function scrollToCTA() {
	document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll para nav links
document.querySelectorAll('.nav-links a').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const targetId = link.getAttribute('href');
		document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
	});
});

// Animação ao scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

document.querySelectorAll('.feature-card, .testimonial').forEach((el) => {
	el.style.opacity = '0';
	el.style.transform = 'translateY(30px)';
	el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
	observer.observe(el);
});
