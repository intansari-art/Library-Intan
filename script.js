// DOM Elements
const userDropdown = document.getElementById('userDropdown');
const userMenu = document.getElementById('userMenu');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle User Dropdown
function toggleDropdown() {
    userDropdown.classList.toggle('active');
}

// Logout Function
function logout() {
    if(confirm('Apakah Anda yakin ingin logout?')) {
        // Simulate logout
        document.getElementById('userMenu').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'block';
        document.querySelector('.username').textContent = 'Anggota';
        alert('Anda telah logout!');
    }
}

// WhatsApp Chat
function openWhatsApp() {
    const message = 'Halo, saya ingin bertanya tentang layanan The Rooted Library';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate Stats on Scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-card h3');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        let current = 0;
        const increment = finalValue / 100;
        const timer = setInterval(() => {
            current += increment;
            if(current >= parseInt(finalValue)) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.classList.contains('dashboard-stats')) {
                animateStats();
            }
            if(entry.target.classList.contains('action-grid')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.querySelector('.dashboard-stats'));
    observer.observe(document.querySelector('.action-grid'));
    observer.observe(document.querySelector('.recent-activity'));
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if(!userMenu.contains(e.target)) {
            userDropdown.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
