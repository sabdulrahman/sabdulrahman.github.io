/**
 * Portfolio - Abdul Rahman Shaikh
 * Main JavaScript
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

    // --- SCROLL REVEALS & COUNTERS ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('counter')) {
                    const target = +entry.target.dataset.target;
                    let count = 0;
                    const inc = target / 50;
                    const timer = setInterval(() => {
                        count += inc;
                        if (count >= target) {
                            entry.target.textContent = target;
                            clearInterval(timer);
                        } else {
                            entry.target.textContent = Math.ceil(count);
                        }
                    }, 30);
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item, .split-line, .draw-path, .counter').forEach(el => {
        revealObserver.observe(el);
    });

    // --- SCROLL SPY FOR NAVIGATION ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const mobileNavLinks = document.querySelectorAll('.mobile-menu__link[href^="#"]');

    // Map sections to their nav targets (impact -> stack/About)
    const sectionToNav = {
        'home': '#home',
        'stack': '#stack',
        'impact': '#stack',  // Impact highlights About
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
    
        // Get the nav target for this section
        const navTarget = sectionToNav[currentSection] || `#${currentSection}`;
    
        // Update desktop nav links
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === navTarget) {
                link.classList.add('nav__link--active');
            }
        });
    
        // Update mobile nav links
        mobileNavLinks.forEach(link => {
            link.classList.remove('mobile-menu__link--active');
            if (link.getAttribute('href') === navTarget) {
                link.classList.add('mobile-menu__link--active');
            }
        });
    };

    // --- SCROLL EFFECTS ---
    const progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Update active navigation
        updateActiveNav();

        // Progress bar
        if (progressBar) {
            progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
        }

        // Parallax backgrounds
        document.querySelectorAll('.parallax-bg').forEach(bg => {
            const speed = bg.dataset.speed || 0.5;
            const img = bg.querySelector('img');
            if (img) img.style.transform = `translateY(${scrollTop * speed}px) scale(1.1)`;
        });

    }, { passive: true });

    // Initialize on page load
    updateActiveNav();

    // --- MAGNETIC ELEMENTS ---
    document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
        const content = wrap.querySelector('.magnetic-content');
        if (!content) return;
        wrap.addEventListener('mousemove', (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.8;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.8;
            content.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        });
        wrap.addEventListener('mouseleave', () => {
            content.style.transform = 'translate(0, 0) scale(1)';
        });
    });

// --- DRAGGABLE HORIZONTAL SCROLL FOR PROJECTS ---
const projectsContainer = document.getElementById('projectsScroller');
const projectsTrack = document.getElementById('projectsTrack');
const projectsDots = document.getElementById('projectsDots');

if (projectsContainer && projectsTrack && projectsDots) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let hasMoved = false;

    const projectCards = projectsTrack.querySelectorAll('.project-card');

    // Generate dots
    projectsDots.innerHTML = '';
    projectCards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'project-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to project ${index + 1}`);
        dot.addEventListener('click', () => scrollToCard(index));
        projectsDots.appendChild(dot);
    });

    const dots = projectsDots.querySelectorAll('.project-dot');

    // Scroll to specific card
    function scrollToCard(index) {
        const card = projectCards[index];
        if (!card) return;
        
        const containerRect = projectsContainer.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const scrollTarget = projectsContainer.scrollLeft + cardRect.left - containerRect.left - 24;
        
        projectsContainer.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
        });
    }

    // Update active dot
    function updateActiveDot() {
        const containerRect = projectsContainer.getBoundingClientRect();
        const containerLeft = containerRect.left;

        let closestIndex = 0;
        let closestDistance = Infinity;

        projectCards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const distance = Math.abs(cardRect.left - containerLeft - 24);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === closestIndex);
        });
    }

    // Mouse events
    projectsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        hasMoved = false;
        projectsContainer.classList.add('is-dragging');
        startX = e.pageX - projectsContainer.offsetLeft;
        scrollLeft = projectsContainer.scrollLeft;
    });

    projectsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        projectsContainer.classList.remove('is-dragging');
    });

    projectsContainer.addEventListener('mouseup', () => {
        isDown = false;
        projectsContainer.classList.remove('is-dragging');
    });

    projectsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        hasMoved = true;
        const x = e.pageX - projectsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        projectsContainer.scrollLeft = scrollLeft - walk;
    });

    // Prevent click on links after drag
    projectsContainer.addEventListener('click', (e) => {
        if (hasMoved) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // Touch support
    let touchStartX;
    let touchScrollLeft;

    projectsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - projectsContainer.offsetLeft;
        touchScrollLeft = projectsContainer.scrollLeft;
    }, { passive: true });

    projectsContainer.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - projectsContainer.offsetLeft;
        const walk = (x - touchStartX) * 2;
        projectsContainer.scrollLeft = touchScrollLeft - walk;
    }, { passive: true });

    // Scroll listener for dots
    projectsContainer.addEventListener('scroll', updateActiveDot, { passive: true });

    // Initialize
    updateActiveDot();
}

    // --- 3D TILT CARD ---
    const tiltWrap = document.querySelector('.tilt-card-wrapper');
    const tiltCard = document.querySelector('.tilt-card');
    if (tiltWrap && tiltCard) {
        tiltWrap.addEventListener('mousemove', (e) => {
            const rect = tiltWrap.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
            tiltCard.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
        });
        tiltWrap.addEventListener('mouseleave', () => {
            tiltCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }

    // --- CHART.JS ---
    const evalChartEl = document.getElementById('evalChart');
    if (evalChartEl && window.Chart) {
        const ctx = evalChartEl.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 180);
        gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
        gradient.addColorStop(1, 'rgba(255,255,255,0.05)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
                datasets: [{
                    label: 'gpt-4o-mini',
                    data: [64, 68, 71, 74, 78, 82],
                    borderColor: '#ffffff',
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.35,
                    pointRadius: 2,
                    borderWidth: 1.5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        ticks: { color: 'rgba(255,255,255,0.7)', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                    },
                    y: {
                        suggestedMin: 50,
                        suggestedMax: 90,
                        ticks: {
                            color: 'rgba(255,255,255,0.7)',
                            font: { size: 11 },
                            callback: v => v + '%'
                        },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                    }
                }
            }
        });
    }

    // --- YEAR UPDATE ---
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// --- PAPER FILTERS (global for onclick) ---
function filterPapers(filter) {
    const papers = document.querySelectorAll('.paper-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('bg-white', 'text-black');
        btn.classList.add('border', 'border-white/20', 'text-white/60', 'hover:bg-white/10');
    });

    const activeBtn = document.getElementById(`filter-${filter}`);
    if (activeBtn) {
        activeBtn.classList.remove('border', 'border-white/20', 'text-white/60', 'hover:bg-white/10');
        activeBtn.classList.add('bg-white', 'text-black');
    }

    papers.forEach(paper => {
        paper.classList.toggle('hidden', !paper.classList.contains(filter));
    });
}