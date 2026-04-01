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
    const navMenu = document.querySelector('.nav__menu');

    // === Menu Mobile ===
    // Adiciona evento de clique no botão de menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav__menu--active');
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
    });

    // === Fecha Menu ao Clicar em Link ===
    // Quando usuário clica em um link do menu, fecha o menu mobile
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('nav__menu--active')) {
                navMenu.classList.remove('nav__menu--active');
            }
        });
    });

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
 * SLIDER DE DEPOIMENTOS
 * ============================================
 * Cria um slider interativo com dots (patinhas)
 * - Suporta swipe em mobile
 * - Dots são visíveis apenas em desktop
 * - Usa scroll-snap para controle de slides
 * - Funciona com qualquer número de depoimentos
 */
function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials__slider');
    const dots = document.querySelectorAll('.testimonials__dot');
    
    if (!slider || dots.length === 0) return;

    // Função para atualizar dot ativo
    const updateActiveDot = () => {
        // Calcula qual slide está visível baseado no scroll
        const cards = slider.querySelectorAll('.testimonials__card');
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // 2rem = 32px
        const scrollPosition = slider.scrollLeft;
        
        // Calcula o índice atual baseado na posição do scroll
        const currentIndex = Math.round(scrollPosition / (cardWidth + gap));
        
        // Atualiza classe active nos dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('testimonials__dot--active', index === currentIndex);
        });
    };

    // Evento: quando scrollar o slider, atualiza dot ativo
    slider.addEventListener('scroll', updateActiveDot);

    // Evento: clicar no dot para ir para aquele slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const cards = slider.querySelectorAll('.testimonials__card');
            const card = cards[index];
            
            if (card) {
                card.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
        });
    });
}
