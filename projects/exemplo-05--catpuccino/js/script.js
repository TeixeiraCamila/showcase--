/* ============================================
   CATPUCCINO - Cat Café Landing Page
   JavaScript com comentários para desenvolvedores júnior
   
   Este arquivo contém todas as funcionalidades JS da página:
   - Inicialização de ícones (Lucide + Phosphor)
   - Navegação (menu mobile, scroll, smooth scroll)
   - Abas do menu
   - Slider de depoimentos
   -Ano automático no footer
   ============================================ */

/**
 * Aguarda o DOM estar pronto antes de executar qualquer código
 * Isso garante que todos os elementos HTML já existem quando tentarmos manipulá-los
 */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones (Lucide - ícones UI)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Chama todas as funções de inicialização
    initNavigation();      // Navegação e menu
    initMenuTabs();        // Abas do menu (bebidas/sobremesas)
    initTestimonialsSlider(); // Slider de depoimentos
    initYear();            // Ano automático no footer
});

/**
 * ============================================
 * ANO AUTOMÁTICO NO FOOTER
 * ============================================
 * Atualiza o ano no copyright do footer automaticamente
 * Baseado no ano atual do sistema
 */
function initYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * ============================================
 * NAVEGAÇÃO
 * ============================================
 */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav__toggle');
    const mobileWrap = document.querySelector('.nav__mobile-wrap');
    const mobileClose = document.querySelector('.nav__mobile-close');
    const backdrop = document.querySelector('.nav__mobile-backdrop');
    const mobileLinks = document.querySelectorAll('.nav__mobile-link');
    const floatingCats = document.querySelector('.floating-cats-container');

    // Abrir menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            mobileWrap.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Fechar menu
    const closeMenu = () => {
        mobileWrap.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }

    // Fechar ao clicar em link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar com Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileWrap?.classList.contains('active')) {
            closeMenu();
        }
    });

    // Scroll effect + Ocultar floating cats na seção #home
    window.addEventListener('scroll', () => {
        // Sombra na nav
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
        }

        // Ocultar floating cats quando na seção #home
        if (floatingCats) {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const homeRect = homeSection.getBoundingClientRect();
                const isInHome = homeRect.top <= 150 && homeRect.bottom >= 150;
                floatingCats.classList.toggle('hidden', isInHome);
            }
        }
    });

    // Verificar posição inicial
    if (floatingCats) {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const homeRect = homeSection.getBoundingClientRect();
            const isInHome = homeRect.top <= 150 && homeRect.bottom >= 150;
            if (isInHome) floatingCats.classList.add('hidden');
        }
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

/**
 * ============================================
 * ABAS DO MENU
 * ============================================
 * Controla as abas de Bebidas e Sobremesas
 * - Alterna classe active nas abas
 * - Mostra/oculta o painel correspondente
 */
function initMenuTabs() {
    // Seleciona todas as abas e painéis
    const tabs = document.querySelectorAll('.menu__tab');
    const panels = document.querySelectorAll('.menu__panel');

    // Adiciona evento de clique em cada aba
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Remove classe active de todas as abas
            tabs.forEach(t => {
                t.classList.remove('menu__tab--active');
                t.setAttribute('aria-selected', 'false');
            });
            // Adiciona classe active na aba clicada
            tab.classList.add('menu__tab--active');
            tab.setAttribute('aria-selected', 'true');

            // Oculta todos os painéis
            panels.forEach(panel => {
                panel.classList.remove('menu__panel--active');
            });

            // Mostra o painel alvo
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('menu__panel--active');
            }
        });
    });
}

/**
 * ============================================
 * SLIDER DE DEPOIMENTOS (Swiper.js)
 * ============================================
 * Slider interativo com autoplay
 * - Autoplay com 5 segundos de delay
 * - Paginação com bullets customizados
 * - Loop contínuo
 * - Desktop: 3 slides, Tablet: 2 slides, Mobile: 1 slide
 */
function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials__slider');
    
    if (!slider || typeof Swiper === 'undefined') return;

    const swiper = new Swiper('.testimonials__slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Navigation arrows
    const prevBtn = document.querySelector('.testimonials__arrow--prev');
    const nextBtn = document.querySelector('.testimonials__arrow--next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => swiper.slidePrev());
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => swiper.slideNext());
    }

    const dots = document.querySelectorAll('.testimonials__dot');
    if (dots.length > 0) {
        swiper.on('slideChange', () => {
            dots.forEach((dot, index) => {
                dot.classList.toggle('testimonials__dot--active', index === swiper.realIndex);
            });
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                swiper.slideToLoop(index);
            });
        });
    }
}
