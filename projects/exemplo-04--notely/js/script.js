lucide.createIcons();

// NOTICE CARD
const noticeToggle = document.querySelector('[data-notice-toggle]');
const noticeCard = document.querySelector('[data-notice-card]');

function openNotice() {
	if (!noticeCard) return;
	noticeCard.classList.add('is-open');
}

function closeNotice() {
	if (!noticeCard) return;
	noticeCard.classList.remove('is-open');
}

noticeToggle?.addEventListener('click', (event) => {
	event.stopPropagation();
	if (noticeCard?.classList.contains('is-open')) {
		closeNotice();
	} else {
		openNotice();
	}
});

noticeCard?.querySelector('[data-notice-close]')?.addEventListener('click', (event) => {
	event.stopPropagation();
	closeNotice();
});

document.addEventListener('click', (event) => {
	if (noticeCard && !noticeCard.contains(event.target)) {
		closeNotice();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') closeNotice();
});

document.addEventListener('DOMContentLoaded', (event) => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(SplitText);

	// animações
	const splitText = document.querySelector('.split');
	const heroTitle = document.querySelector('#heroTitle');
	const heroBadge = document.querySelector('#heroBadge ');
	const blob1 = document.querySelector('#blob1');
	const blob2 = document.querySelector('#blob2');
	const heroButtons = document.querySelector('#heroButtons ');
	const heroDescription = document.querySelector('#heroDescription');

	gsap.set('.split', { opacity: 1 });
	const split = SplitText.create('.split', {
		type: 'words',
		wordsClass: 'word++',
		wordDelimiter: String.fromCharCode(8205),
	});
	gsap.from(split.words, {
		y: -100,
		opacity: 0,
		rotation: 'random(-80,80)',
		stagger: 0.1,
		duration: 1,
		ease: 'back',
	});

	gsap.from('nav', {
		y: -100,
		opacity: 0,
		duration: 2,
		ease: 'power3.out',
	});

	gsap.from(heroBadge, {
		scale: 0,
		opacity: 0,
		duration: 0.6,
		delay: 0.3,
		ease: 'back.out(1.7)',
	});

	gsap.from(heroTitle, {
		y: 50,
		opacity: 0,
		duration: 1,
		delay: 0.5,
		ease: 'back.out(1.7)',
	});
	gsap.from(heroDescription, {
		y: 30,
		opacity: 0,
		duration: 1,
		delay: 0.7,
		ease: 'power3.out',
	});
	gsap.from(heroButtons, {
		y: 30,
		opacity: 0,
		duration: 1,
		delay: 0.9,
		ease: 'power3.out',
	});

	gsap.from(blob1, {
		y: 30,
		x: 50,
		duration: 3,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	});

	gsap.from(blob2, {
		y: 40,
		x: -30,
		duration: 4,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	});

	const featureCards = document.querySelectorAll('.card');
	gsap.from(featureCards, {
		scrollTrigger: {
			trigger: featureCards[0],
			start: 'top 80%',
		},
		y: 60,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
		ease: 'power3.out',
		clearProps: 'all',
	});

	gsap.from('#history', {
		scrollTrigger: { trigger: '#history', start: 'top 85%' },
		y: 40,
		opacity: 0,
		duration: 1,
		ease: 'power3.out',
	});

	const emailSection = document.querySelector('#emailSection');
	gsap.from(emailSection, {
		scrollTrigger: {
			trigger: emailSection,
			start: 'top 80%',
		},
		scale: 0.9,
		opacity: 0,
		duration: 1,
		ease: 'power3.out',
	});

	const storyBars = document.querySelectorAll('.story-bar');
	const stroySquares = document.querySelectorAll('.story-square');
	const storyText = document.querySelectorAll('#storyText');
	gsap.from(storyBars, {
		scrollTrigger: {
			trigger: storyBars[0],
			start: 'top 80%',
		},
		width: 0,
		duration: 1,
		stagger: 0.15,
		delay: 0.3,
		ease: 'power2.out',
	});
	gsap.from(stroySquares, {
		scrollTrigger: {
			trigger: stroySquares[0],
			start: 'top 80%',
		},
		width: 0,
		rotation: 180,
		duration: 0.6,
		stagger: 0.2,
		delay: 0.6,
		ease: 'back.out(1.7)',
	});
	gsap.from(storyText, {
		scrollTrigger: {
			trigger: storyText,
			start: 'top 80%',
		},
		x: -50,
		opacity: 0,
		delay: 0.6,
		duration: 0.6,
		ease: 'power3.out',
	});
});
