// ===== Scroll-based reveal animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger trend bar animation
            if (entry.target.classList.contains('trend-card')) {
                entry.target.classList.add('animate');
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.news-card, .tool-card, .trend-card, .featured-card, .stat-card'
    );
    animatedElements.forEach(el => observer.observe(el));
});

// ===== Counter animation for hero stats =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            counter.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(updateCounter);
    });
}

// Trigger counters when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    heroObserver.observe(heroStats);
}

// ===== Duplicate ticker content for seamless loop =====
const ticker = document.querySelector('.ticker');
if (ticker) {
    const clone = ticker.innerHTML;
    ticker.innerHTML += clone;
}

// ===== Navbar background on scroll =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
    }

    lastScroll = currentScroll;
}, { passive: true });

// ===== Smooth scroll for nav links =====
document.querySelectorAll('.nav-link, .footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===== Set current date =====
const dateEl = document.getElementById('current-date');
if (dateEl) {
    const now = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
}
