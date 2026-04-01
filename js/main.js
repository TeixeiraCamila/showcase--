// Utility function to debounce expensive operations
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// Utility function to throttle frequent events
function throttle(func, limit) {
	let inThrottle;
	return function (...args) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

// Function to initialize lazy loading for images
function initLazyLoading() {
	// Support for native loading="lazy" attribute
	const images = document.querySelectorAll('img[loading="lazy"]');
	if ('loading' in HTMLImageElement.prototype) {
		// Native support - no action needed
	} else {
		// Fallback with Intersection Observer
		const imageObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.src = entry.target.dataset.src;
						imageObserver.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '50px' }
		);

		images.forEach((img) => imageObserver.observe(img));
	}
}

// Performance optimizations
function initPerformanceOptimizations() {
	// Respect user preferences for reduced motion
	const prefersReducedMotion = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;

	// Monitor Web Vitals - Cumulative Layout Shift
	if ('PerformanceObserver' in window) {
		try {
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.type === 'layout-shift' && !entry.hadRecentInput) {
						console.log('CLS:', entry.value);
					}
				}
			});
			observer.observe({ entryTypes: ['layout-shift'] });
		} catch (e) {
			// Fallback for unsupported browsers
		}
	}

	// Optimize animations with will-change
	const cardsToOptimize = document.querySelectorAll('.project-card');
	cardsToOptimize.forEach((card) => {
		card.style.willChange = 'transform, opacity';
	});
}

document.addEventListener('DOMContentLoaded', () => {
	initLazyLoading();
	initPerformanceOptimizations();
	initializeCardRotations();
	animateCardsEntry();
});

// Inicializar rotações dos cards
function initializeCardRotations() {
	const cards = document.querySelectorAll('.project-card');

	cards.forEach((card) => {
		const rotation = Math.random() * 6 - 3;
		const translateY = Math.random() * 12 - 6;

		const transform = `rotate(${rotation}deg) translateY(${translateY}px)`;
		card.style.setProperty('--card-transform', transform);

		card.dataset.rotation = rotation;
		card.dataset.translateY = translateY;
	});
}

// Animação de entrada dos cards
function animateCardsEntry() {
	const cards = document.querySelectorAll('.project-card');
	cards.forEach((card, index) => {
		const rotation = parseFloat(card.dataset.rotation);
		const translateY = parseFloat(card.dataset.translateY);

		card.style.opacity = '0';
		card.style.transform = `rotate(${rotation}deg) translateY(${
			translateY + 30
		}px)`;

		setTimeout(() => {
			card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
			card.style.opacity = '1';
			card.style.transform = `rotate(${rotation}deg) translateY(${translateY}px)`;
		}, index * 100);
	});
}

// Custom cursor (BEM: cursor, cursor__trail)
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor__trail');
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

// Throttle mouse movement to 16ms (60fps)
document.addEventListener(
	'mousemove',
	throttle((e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
		if (cursor) {
			cursor.style.left = mouseX - 10 + 'px';
			cursor.style.top = mouseY - 10 + 'px';
		}
	}, 16)
);

// Trail seguindo o cursor
function animateTrail() {
	trailX += (mouseX - trailX) * 0.15;
	trailY += (mouseY - trailY) * 0.15;
	if (cursorTrail) {
		cursorTrail.style.left = trailX - 6 + 'px';
		cursorTrail.style.top = trailY - 6 + 'px';
	}
	requestAnimationFrame(animateTrail);
}
animateTrail();

document.addEventListener('mousedown', () => {
	if (cursor) cursor.classList.add('cursor_clicking');
});

document.addEventListener('mouseup', () => {
	if (cursor) cursor.classList.remove('cursor_clicking');
});

// Detectar hover em elementos interativos
const interactiveElements = document.querySelectorAll(
	'a, button, .project-card'
);

interactiveElements.forEach((el) => {
	el.addEventListener('mouseenter', () => {
		if (cursor) cursor.classList.add('cursor_hovering');
		if (cursorTrail) cursorTrail.classList.add('cursor__trail_hovering');
	});

	el.addEventListener('mouseleave', () => {
		if (cursor) cursor.classList.remove('cursor_hovering');
		if (cursorTrail) cursorTrail.classList.remove('cursor__trail_hovering');
	});
});

// Garantir que execute mesmo se DOM já estiver carregado
if (document.readyState !== 'loading') {
	initializeCardRotations();
	animateCardsEntry();
}