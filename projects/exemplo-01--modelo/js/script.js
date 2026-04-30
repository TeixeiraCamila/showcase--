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
