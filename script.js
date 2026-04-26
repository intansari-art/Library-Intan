// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });

    // Kalkulator functionality di uji-coba.html
    const kalkulatorForm = document.querySelector('.kalkulator-form');
    if (kalkulatorForm) {
        kalkulatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const angka1 = this.querySelector('input[name="angka1"]').value;
            const angka2 = this.querySelector('input[name="angka2"]').value;
            const operasi = this.querySelector('select[name="operasi"]').value;
            
            // Simpan ke localStorage
            localStorage.setItem('angka1', angka1);
            localStorage.setItem('angka2', angka2);
            localStorage.setItem('operasi', operasi);
            
            // Redirect ke hasil
            window.open('kalkulator-hasil.html', '_blank');
        });
    }

    // Login functionality
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = this.querySelector('input[name="username"]').value;
            const password = this.querySelector('input[name="password"]').value;
            const message = this.querySelector('.login-message') || document.createElement('p');
            
            message.className = 'login-message';
            message.style.marginTop = '1rem';
            
            if (!username || !password) {
                message.textContent = '❌ Input tidak lengkap!';
                message.style.color = 'red';
            } else if (username === 'admin' && password === 'batak123') {
                message.textContent = '✅ Login sukses! Selamat datang Admin';
                message.style.color = 'green';
            } else {
                message.textContent = '❌ Login gagal! Username atau password salah';
                message.style.color = 'red';
            }
            
            if (!this.querySelector('.login-message')) {
                this.appendChild(message);
            }
        });
    }

    // Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.book-card, .about-card, .event-card, .uji-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // PHP 1000 hari simulation (tampilkan secara bertahap)
    const phpBox = document.querySelector('.php-box');
    if (phpBox) {
        let day = 1;
        const interval = setInterval(() => {
            if (day <= 1000) {
                phpBox.innerHTML += `Ini adalah hari ke-${day} aku belajar PHP<br>`;
                day++;
                phpBox.scrollTop = phpBox.scrollHeight;
            } else {
                clearInterval(interval);
            }
        }, 10);
    }

    // Favorite buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('favorite-btn')) {
            e.target.textContent = '❤️ Disukai';
            e.target.style.background = '#e74c3c';
        }
    });
});
