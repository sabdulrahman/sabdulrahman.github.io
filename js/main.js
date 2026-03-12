/**
 * Portfolio - Abdul Rahman Shaikh
 * Main JavaScript (Updated)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // --- MOBILE MENU ---
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('[data-menu-link]');

    if (menuToggle && mobileMenu) {
        const openMenu = () => {
            mobileMenu.classList.add('is-open');
            menuToggle.classList.add('is-active');
            menuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('is-open');
            menuToggle.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
        });

        mobileMenu.querySelector('.mobile-menu__backdrop')?.addEventListener('click', closeMenu);
        menuLinks.forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
        });
    }

    // --- THEME TOGGLE ---
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);

    function toggleTheme() {
        const current = htmlEl.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    document.querySelector('[data-theme-toggle]')?.addEventListener('click', toggleTheme);
    document.querySelector('[data-theme-toggle-mobile]')?.addEventListener('click', toggleTheme);

    // --- DOCUMENT DOWNLOAD DROPDOWN ---
    const docDropdown = document.querySelector('[data-doc-dropdown]');
    if (docDropdown) {
        const dropdownBtn = docDropdown.querySelector('.nav__cta');
        
        const toggleDropdown = (open) => {
            docDropdown.classList.toggle('is-open', open);
            dropdownBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown(!docDropdown.classList.contains('is-open'));
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!docDropdown.contains(e.target)) {
                toggleDropdown(false);
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleDropdown(false);
        });
    }

    // --- SCROLL REVEALS ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => {
        revealObserver.observe(el);
    });

    // --- SCROLL SPY FOR NAVIGATION ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const mobileNavLinks = document.querySelectorAll('.mobile-menu__link[href^="#"]');

    // Map sections to their nav targets
    const sectionToNav = {
        'home': '#home',
        'about': '#about',
        'experience': '#experience',
        'research': '#research',
        'projects': '#projects',
        'contact': '#contact'
    };

    const updateActiveNav = () => {
        const scrollPos = window.scrollY + window.innerHeight / 3;
        const scrollBottom = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        
        // If near bottom of page, highlight Contact
        if (scrollBottom >= docHeight - 50) {
            navLinks.forEach(link => {
                link.classList.remove('nav__link--active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('nav__link--active');
                }
            });
            mobileNavLinks.forEach(link => {
                link.classList.remove('mobile-menu__link--active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('mobile-menu__link--active');
                }
            });
            return;
        }
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
    
        const navTarget = sectionToNav[currentSection] || `#${currentSection}`;
    
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === navTarget) {
                link.classList.add('nav__link--active');
            }
        });
    
        mobileNavLinks.forEach(link => {
            link.classList.remove('mobile-menu__link--active');
            if (link.getAttribute('href') === navTarget) {
                link.classList.add('mobile-menu__link--active');
            }
        });
    };

    // --- SCROLL EFFECTS ---
    window.addEventListener('scroll', () => {
        updateActiveNav();
    }, { passive: true });

    // Initialize on page load
    updateActiveNav();

    // --- PAPER FILTERS (theme-aware, with scroll) ---
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const paperCards = document.querySelectorAll('.paper-card');
    const papersContainer = document.getElementById('papers-container');

    function filterPapers(filter) {
        // Update button states with theme-aware classes
        filterButtons.forEach(btn => {
            const isActive = btn.dataset.filter === filter;
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            
            // Remove all Tailwind color classes
            btn.classList.remove('bg-white', 'text-black', 'border', 'border-white/20', 'text-white/60', 'hover:bg-white/10');
            // Remove our theme classes
            btn.classList.remove('filter-btn--active', 'filter-btn--inactive');
            
            // Apply theme-aware class
            btn.classList.add(isActive ? 'filter-btn--active' : 'filter-btn--inactive');
        });

        // Show/hide papers
        paperCards.forEach(paper => {
            paper.classList.toggle('hidden', !paper.classList.contains(filter));
        });

        // Scroll to first visible paper — offset for fixed nav
        if (papersContainer) {
            const firstVisible = papersContainer.querySelector('.paper-card:not(.hidden)');
            if (firstVisible) {
                setTimeout(() => {
                    const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
                    const y = firstVisible.getBoundingClientRect().top + window.scrollY - navHeight - 32;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 50);
            }
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterPapers(btn.dataset.filter);
        });
    });

    // Initialize filter buttons with theme-aware classes on load
    filterButtons.forEach(btn => {
        const isActive = btn.getAttribute('aria-pressed') === 'true';
        btn.classList.remove('bg-white', 'text-black', 'border', 'border-white/20', 'text-white/60', 'hover:bg-white/10');
        btn.classList.add(isActive ? 'filter-btn--active' : 'filter-btn--inactive');
    });

    // --- YEAR UPDATE ---
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});