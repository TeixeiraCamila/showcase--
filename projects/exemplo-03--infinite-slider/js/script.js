// Slider interaction settings (thresholds and durations)
const CONFIG = {
	COOLDOWN: 450, // minimum ms between navigations, debounces fast wheel bursts
	WHEEL_THRESHOLD: 30, // |deltaY| below this is ignored (trackpads emit tiny deltas)
	TOUCH_THRESHOLD: 40, // px the finger must travel before a swipe counts
	ANIMATION_DURATION: 0.9, // seconds for the slide crossfade
	TEXT_OFFSET: 400, // px the text panel stops short of the slide's right edge
};

// Slider shared state
const state = {
	current: 0, // active slide
	is_animating: false, // true while a timeline runs, blocks concurrent navigations
	last_action: 0, // timestamp (performance.now) of the last accepted navigation
	touch_start_y: null, // Y coordinate where the current touch gesture began
};

// Loads slide data from the local JSON file and boots the slider.
// leaves the empty container (no broken UI is rendered).
document.addEventListener('DOMContentLoaded', async () => {
	try {
		const response = await fetch('./data/slides.json');
		const slides_data = await response.json();
		render_slides(slides_data);
		init_slider();
	} catch (error) {
		console.error('Error loading data:', error);
	}
});

function escape_html(str) {
	const div = document.createElement('div');
	div.textContent = str;
	return div.innerHTML;
}

// Renders title, description and slide cards in the container.
function render_slides(data) {
	document.getElementById('page-title').textContent = data.title;
	document.getElementById('page-heading').textContent = data.title;
	document.getElementById('page-description').textContent = data.description;

	const container = document.getElementById('slides-container');
	container.innerHTML = data.slides
		.map(
			(slide) => `
			<div class="slider__slide" data-obs="${escape_html(slide.observation)}">
				<div class="slider__text">
					<h3>${escape_html(slide.title)}</h3>
					${slide.text.map((p) => `<p>${escape_html(p)}</p>`).join('')}
				</div>
				<img class="slider__img" src="${slide.image}" alt="${escape_html(slide.alt)}" data-index="${slide.id}" />
			</div>
		`,
		)
		.join('');
}

// Sets the initial visible slide and binds the navigation events.
// All slides start at autoAlpha 0 (the CSS default) so only the first
// one is shown; its text panel is animated in once.
function init_slider() {
	const slides = document.querySelectorAll('.slider__slide');
	if (!slides.length) return;

	const texts = document.querySelectorAll('.slider__text');

	gsap.set(slides, { autoAlpha: 0 });
	gsap.set(slides[0], { autoAlpha: 1, attr: { 'data-active': 'true' } });

	// Animates the first slide text to the right edge, mirroring the entry
	// animation used on every subsequent navigation (see animate_slides)
	gsap.set(texts, { autoAlpha: 0, x: -100, y: 0 });
	gsap.to(texts[0], {
		autoAlpha: 0.8,
		x: slides[0].offsetWidth - CONFIG.TEXT_OFFSET,
		duration: 1,
		ease: 'power3.out',
	});

	update_resume(slides[0]);
	update_status(slides.length);

	window.addEventListener('wheel', (e) => handle_wheel(e, slides, texts), { passive: false });
	window.addEventListener('touchstart', handle_touch_start, { passive: true });
	window.addEventListener('touchmove', (e) => handle_touch_move(e, slides, texts), { passive: true });
	window.addEventListener('touchend', handle_touch_end, { passive: true });
	window.addEventListener('keydown', (e) => handle_key(e, slides, texts));
	document.body.setAttribute('tabindex', '0');
}

// Navigates to the target slide applying cooldown and infinite loop.
// makes the slider loop forever in both directions.
function go_to(target, slides, texts) {
	const now = performance.now();
	if (now - state.last_action < CONFIG.COOLDOWN || state.is_animating) return;
	state.last_action = now;

	const prev = state.current;
	const next = ((target % slides.length) + slides.length) % slides.length;
	if (next === prev) return;

	state.current = next;
	state.is_animating = true;
	animate_slides(slides[prev], slides[next], texts[prev], texts[next], slides, next);
	update_resume(slides[next]);
	update_status(slides.length);
}

// Animates the transition between the current slide and the next one.
//
// During the navigation the incoming slide crossfades in while the
// outgoing one fades out; simultaneously the text panels swap: the new
// text eases in from the left with a slight overshoot (back.out) while
// the old one exits to the right. On complete the timeline resets the
// y offsets and stamps data-active on the winning slide, which drives
// any CSS/ARIA hooks keyed to the active state.
function animate_slides(out_slide, in_slide, out_text, in_text, slides, next_index) {
	const tl = gsap.timeline({
		onComplete: () => {
			state.is_animating = false;
			gsap.set([in_slide, out_slide], { y: 0 });
			slides.forEach((slide, index) => slide.setAttribute('data-active', index === next_index ? 'true' : 'false'));
		},
	});

	gsap.set(in_slide, { autoAlpha: 0 });
	tl.to(in_slide, { autoAlpha: 1, duration: CONFIG.ANIMATION_DURATION, ease: 'power2.out' }, 0);
	tl.to(out_slide, { autoAlpha: 0, duration: CONFIG.ANIMATION_DURATION, ease: 'power2.in' }, 0);

	gsap.set(in_text, { x: -100, y: -20, autoAlpha: 0, scale: 0.9 });
	tl.to(
		in_text,
		{
			x: in_slide.offsetWidth - CONFIG.TEXT_OFFSET,
			y: 0,
			autoAlpha: 0.8,
			scale: 1,
			duration: CONFIG.ANIMATION_DURATION * 0.8,
			ease: 'back.out(1.4)',
		},
		0.3,
	);

	tl.to(
		out_text,
		{
			x: out_slide.offsetWidth,
			y: 20,
			autoAlpha: 0,
			scale: 0.9,
			duration: CONFIG.ANIMATION_DURATION * 0.6,
			ease: 'power2.in',
		},
		0,
	);
}

// Updates observation and summary image for the given slide.
function update_resume(slide) {
	const obs = slide.getAttribute('data-obs');
	const obs_el = document.getElementById('resume-obs');
	const img_el = document.getElementById('resume-image');

	const slide_img = slide.querySelector('img');

	if (img_el && slide_img) {
		img_el.src = slide_img.src;
		img_el.alt = slide_img.alt;
	}
	if (obs_el) obs_el.textContent = obs;
}

// Updates the status text with the current index.
function update_status(total) {
	const status = document.getElementById('status');
	if (status) status.textContent = `Image ${state.current + 1} of ${total}`;
}

// Handles navigation via mouse wheel scroll.
// positive deltaY means the wheel went down, so we move to the next slide.
function handle_wheel(e, slides, texts) {
	if (Math.abs(e.deltaY) < CONFIG.WHEEL_THRESHOLD) return;
	e.preventDefault();
	go_to(state.current + (e.deltaY > 0 ? 1 : -1), slides, texts);
}

// Records the initial touch position on mobile.
// No touch is ignored; we only track vertical movement for swipes.
function handle_touch_start(e) {
	const touch = e.touches?.[0];
	state.touch_start_y = touch ? touch.clientY : null;
}

// Navigates according to the swipe gesture direction.
// A swipe is only triggered after the finger travels beyond the touch
// threshold; the baseline is then reset so the gesture counts once.
function handle_touch_move(e, slides, texts) {
	if (state.touch_start_y === null) return;
	const touch = e.touches?.[0];
	if (!touch) return;

	const dy = state.touch_start_y - touch.clientY;
	if (Math.abs(dy) > CONFIG.TOUCH_THRESHOLD) {
		go_to(state.current + (dy > 0 ? 1 : -1), slides, texts);
		state.touch_start_y = null;
	}
}

function handle_touch_end() {
	state.touch_start_y = null;
}

// Navigates with the keyboard (up/down arrows and page up/down).
// preventDefault stops arrows from scrolling the page while navigating.
function handle_key(e, slides, texts) {
	const key_map = { ArrowDown: 1, ArrowUp: -1, PageDown: 1, PageUp: -1 };
	const direction = key_map[e.key];
	if (direction) {
		e.preventDefault();
		go_to(state.current + direction, slides, texts);
	}
}