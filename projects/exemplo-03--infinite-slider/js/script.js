document.addEventListener('DOMContentLoaded', async () => {
	const CONFIG = {
		COOLDOWN: 450,
		WHEEL_THRESHOLD: 30,
		TOUCH_THRESHOLD: 40,
		ANIMATION_DURATION: 0.9,
		TEXT_OFFSET: 400,
	};

	let current = 0;
	let isAnimating = false;
	let lastAction = 0;
	let touchStartY = null;
	let slidesData = [];

	// Load data
	try {
		const response = await fetch('./data/apes.json');
		slidesData = await response.json();
		renderSlides(slidesData);
		initSlider();
	} catch (error) {
		console.error('Erro ao carregar dados:', error);
	}

	function escapeHtml(str) {
		const div = document.createElement('div');
		div.textContent = str;
		return div.innerHTML;
	}

	function renderSlides(data) {
		document.getElementById('page-title').textContent = data.title;
		document.getElementById('page-heading').textContent = data.title;
		document.getElementById('page-description').textContent = data.description;

		const container = document.getElementById('slides-container');
		container.innerHTML = data.slides
			.map(
				(slide) => `
			<div class="slider__slide" data-tomatometer="${slide.tomatometer}" data-obs="${escapeHtml(slide.observation)}">
				<div class="slider__text">
					<h3>${escapeHtml(slide.title)}</h3>
					${slide.text.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
				</div>
				<img class="slider__img" src="${slide.image}" alt="${escapeHtml(slide.alt)}" data-index="${slide.id}" />
			</div>
		`,
			)
			.join('');
	}

	function initSlider() {
		const slides = document.querySelectorAll('.slider__slide');
		const texts = document.querySelectorAll('.slider__text');
		const status = document.getElementById('status');

		if (!slides.length) return;

		gsap.set(slides, { autoAlpha: 0 });
		gsap.set(slides[0], { autoAlpha: 1 });
		gsap.set(slides[0], { attr: { 'data-active': 'true' } });

		gsap.set(texts, { autoAlpha: 0, x: -100, y: 0 });
		gsap.to(texts[0], {
			autoAlpha: 0.8,
			x: slides[0].offsetWidth - CONFIG.TEXT_OFFSET,
			duration: 1,
			ease: 'power3.out',
		});

		updateResume(slides[0]);

		function goTo(index) {
			const now = performance.now();
			if (now - lastAction < CONFIG.COOLDOWN || isAnimating) return;
			lastAction = now;

			const prev = current;
			current = ((index % slides.length) + slides.length) % slides.length;
			if (current === prev) return;

			isAnimating = true;
			animateSlides(slides[prev], slides[current], texts[prev], texts[current]);
			updateResume(slides[current]);
			updateStatus();
		}

		function animateSlides(outSlide, inSlide, outText, inText) {
			const tl = gsap.timeline({
				onComplete: () => {
					isAnimating = false;
					gsap.set([inSlide, outSlide], { y: 0 });
				},
			});

			gsap.set(inSlide, { autoAlpha: 0 });
			tl.to(inSlide, { autoAlpha: 1, duration: CONFIG.ANIMATION_DURATION, ease: 'power2.out' }, 0);
			tl.to(outSlide, { autoAlpha: 0, duration: CONFIG.ANIMATION_DURATION, ease: 'power2.in' }, 0);

			gsap.set(inText, { x: -100, y: -20, autoAlpha: 0, scale: 0.9 });
			tl.to(
				inText,
				{
					x: inSlide.offsetWidth - CONFIG.TEXT_OFFSET,
					y: 0,
					autoAlpha: 0.8,
					scale: 1,
					duration: CONFIG.ANIMATION_DURATION * 0.8,
					ease: 'back.out(1.4)',
				},
				0.3,
			);

			tl.to(
				outText,
				{
					x: outSlide.offsetWidth,
					y: 20,
					autoAlpha: 0,
					scale: 0.9,
					duration: CONFIG.ANIMATION_DURATION * 0.6,
					ease: 'power2.in',
				},
				0,
			);

			slides.forEach((s, i) => s.setAttribute('data-active', i === current ? 'true' : 'false'));
		}

		function updateResume(slide) {
			const tomatometer = slide.getAttribute('data-tomatometer');
			const obs = slide.getAttribute('data-obs');
			const stars = document.getElementById('resume-stars');
			const obsEl = document.getElementById('resume-obs');
			const imgEl = document.getElementById('resume-image');

			const slideImg = slide.querySelector('img');

			if (imgEl && slideImg) {
				imgEl.src = slideImg.src;
				imgEl.alt = slideImg.alt;
			}
			if (stars) {
				const count = Math.min(parseInt(tomatometer, 10) || 0, 5);
				stars.textContent = '✩'.repeat(count);
			}
			if (obsEl) obsEl.textContent = obs;
		}

		function updateStatus() {
			if (status) status.textContent = `Imagem ${current + 1} de ${slides.length}`;
		}

		function handleWheel(e) {
			if (Math.abs(e.deltaY) < CONFIG.WHEEL_THRESHOLD) return;
			e.preventDefault();
			goTo(e.deltaY > 0 ? current + 1 : current - 1);
		}

		function handleTouchStart(e) {
			const touch = e.touches?.[0];
			if (touch) touchStartY = touch.clientY;
		}

		function handleTouchMove(e) {
			if (touchStartY === null) return;
			const touch = e.touches?.[0];
			if (!touch) return;

			const dy = touchStartY - touch.clientY;
			if (Math.abs(dy) > CONFIG.TOUCH_THRESHOLD) {
				goTo(dy > 0 ? current + 1 : current - 1);
				touchStartY = null;
			}
		}

		function handleTouchEnd() {
			touchStartY = null;
		}

		function handleKey(e) {
			const keyMap = { ArrowDown: 1, ArrowUp: -1, PageDown: 1, PageUp: -1 };
			const direction = keyMap[e.key];
			if (direction) {
				e.preventDefault();
				goTo(current + direction);
			}
		}

		window.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('touchstart', handleTouchStart, { passive: true });
		window.addEventListener('touchmove', handleTouchMove, { passive: true });
		window.addEventListener('touchend', handleTouchEnd, { passive: true });
		window.addEventListener('keydown', handleKey);
		document.body.setAttribute('tabindex', '0');
	}
});