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
 * Controla o menu de navegação:
 * - Menu mobile (toggle)
 * - Efeito de scroll (nav fixa)
 * - Smooth scroll para links âncora
 * - Fecha menu ao clicar em um link
 */
function initNavigation() {
    // Seleciona os elementos necessários
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav__toggle');
    const navClose = document.querySelector('.nav__close');
    const navMenu = document.querySelector('.nav__menu');
    const navMenuWrapper = document.querySelector('.nav__menu-wrapper');
    const floatingCats = document.querySelector('.floating-cats-container');
    const homeSection = document.getElementById('home');

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        const isOpening = !navMenu.classList.contains('nav__menu--active');
        
        navMenu.classList.toggle('nav__menu--active');
        navMenuWrapper.classList.toggle('nav__menu-wrapper--active');
        
        if (isOpening) {
            nav.classList.add('nav--menu-open');
        } else {
            nav.classList.remove('nav--menu-open');
        }
        
        document.body.style.overflow = isOpening ? 'hidden' : '';
    };

    // Função para fechar o menu
    const closeMenu = () => {
        navMenu.classList.remove('nav__menu--active');
        navMenuWrapper.classList.remove('nav__menu-wrapper--active');
        nav.classList.remove('nav--menu-open');
        document.body.style.overflow = '';
    };

    // === Menu Mobile (Sidebar) ===
    // Abre menu ao clicar no botão hamburger
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    // Fecha menu ao clicar no botão X
    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    // Fecha menu ao clicar no overlay
    if (navMenuWrapper) {
        navMenuWrapper.addEventListener('click', (e) => {
            if (e.target === navMenuWrapper) {
                closeMenu();
            }
        });
    }

    // === Efeito de Scroll ===
    // Quando usuário scrolla, a nav muda de estilo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Nav com scroll: mais opaque e sombra maior
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            // Nav inicial: menos opaque e sombra menor
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }

        // Ocultar floating cats quando na seção #home
        if (floatingCats && homeSection) {
            const homeRect = homeSection.getBoundingClientRect();
            const isInHome = homeRect.top <= 100 && homeRect.bottom >= 100;
            
            if (isInHome) {
                floatingCats.classList.add('hidden');
            } else {
                floatingCats.classList.remove('hidden');
            }
        }
    });

    // === Fecha Menu ao Clicar em Link ===
    // Quando usuário clica em um link do menu, fecha o menu mobile
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // === Ocultar Floating Cats na Seção #home ===
    // Verifica posição inicial ao carregar a página
    if (floatingCats && homeSection) {
        const checkHomeVisibility = () => {
            const homeRect = homeSection.getBoundingClientRect();
            const isInHome = homeRect.top <= 150 && homeRect.bottom >= 150;
            
            if (isInHome) {
                floatingCats.classList.add('hidden');
            } else {
                floatingCats.classList.remove('hidden');
            }
        };
        
        checkHomeVisibility();
    }

    // === Smooth Scroll ===
    // Faz scroll suave ao clicar em links que começam com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Não faz nada se for apenas # ou #home
            if (targetId === '#' || targetId === '#home') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Calcula posição considerando a altura da nav
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                // Scroll suave até o elemento
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
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
            tabs.forEach(t => t.classList.remove('menu__tab--active'));
            // Adiciona classe active na aba clicada
            tab.classList.add('menu__tab--active');

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
