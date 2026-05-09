// ============================================
// SCRIPT LENGKAP - The Rooted Library
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== SCRIPT LAMA (JAGA) ====================
    
    // 1. PHP 1000 HARI SIMULATION
    const phpBox = document.getElementById('phpBox');
    if (phpBox) {
        let day = 1;
        const interval = setInterval(() => {
            if (day <= 1000) {
                phpBox.innerHTML += `Ini adalah hari ke-${day} aku belajar PHP\n`;
                day++;
                phpBox.scrollTop = phpBox.scrollHeight;
            } else {
                clearInterval(interval);
                phpBox.innerHTML += '\n✅ Selesai 1000 hari belajar PHP!';
            }
        }, 5);
    }

    // 2. KALKULATOR
    const kalkulatorForm = document.getElementById('kalkulatorForm');
    if (kalkulatorForm) {
        kalkulatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const angka1 = formData.get('angka1');
            const angka2 = formData.get('angka2');
            const operasi = formData.get('operasi');
            
            sessionStorage.setItem('calc_a1', angka1);
            sessionStorage.setItem('calc_a2', angka2);
            sessionStorage.setItem('calc_op', operasi);
            
            window.open('kalkulator-hasil.html', '_blank');
        });
    }

    // 3. LOGIN SYSTEM - UPGRADED
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = this.querySelector('input[name="username"]').value;
            const password = this.querySelector('input[name="password"]').value;
            const message = document.getElementById('loginMessage');
            
            if (!username || !password) {
                message.innerHTML = '<p style="color:red;">❌ Input tidak lengkap!</p>';
            } else if (username === 'admin' && password === 'batak123') {
                message.innerHTML = '<p style="color:green;">✅ Login sukses! Selamat datang Admin</p>';
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);
                // REDIRECT KE DASHBOARD
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                message.innerHTML = '<p style="color:red;">❌ Login gagal! Username: admin, Password: batak123</p>';
            }
        });
    }

    // 4. CRUD DATABASE (Local Storage) - TIDAK BERUBAH
    const crudForm = document.getElementById('crudForm');
    const crudTable = document.getElementById('crudTable');
    
    if (crudForm && crudTable) {
        loadCrudData();
        
        crudForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const judul = this.querySelector('input[name="judul"]').value;
            const penulis = this.querySelector('input[name="penulis"]').value;
            const tahun = this.querySelector('input[name="tahun"]').value;
            
            if (judul && penulis && tahun) {
                const books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
                books.push({
                    id: Date.now(),
                    judul, penulis, tahun
                });
                localStorage.setItem('libraryBooks', JSON.stringify(books));
                loadCrudData();
                this.reset();
                alert('✅ Buku berhasil ditambahkan!');
            }
        });
    }

    // ==================== SCRIPT BARU DASHBOARD ====================

    // DOM Elements Dashboard
    const userDropdown = document.getElementById('userDropdown');
    const userMenu = document.getElementById('userMenu');
    const loginBtn = document.getElementById('loginBtn');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // CEK LOGIN STATUS SAAT HALAMAN DIMUAT
    checkLoginStatus();

    // Toggle User Dropdown
    function toggleDropdown() {
        if (userDropdown) {
            userDropdown.classList.toggle('active');
        }
    }

    // CHECK LOGIN STATUS
    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
        const username = sessionStorage.getItem('username') || 'Anggota';
        
        if (isLoggedIn && userMenu && loginBtn) {
            // Update username di dashboard
            const usernameEl = document.querySelector('.username');
            if (usernameEl) usernameEl.textContent = username;
            
            // Show user menu, hide login
            userMenu.style.display = 'block';
            loginBtn.style.display = 'none';
        } else if (userMenu && loginBtn) {
            userMenu.style.display = 'none';
            loginBtn.style.display = 'block';
        }
    }

    // Logout Function - INTEGRASI DENGAN SESSION
    window.logout = function() {
        if(confirm('Apakah Anda yakin ingin logout?')) {
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('username');
            checkLoginStatus();
            
            // Update UI dashboard
            const usernameEl = document.querySelector('.username');
            if (usernameEl) usernameEl.textContent = 'Anggota';
            
            alert('👋 Anda telah logout! Silakan login kembali.');
        }
    }

    // WhatsApp Chat
    window.openWhatsApp = function() {
        const username = sessionStorage.getItem('username') || 'Pengunjung';
        const message = `Halo Admin, ${username} ingin bertanya tentang layanan The Rooted Library`;
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else if (navbar) {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Animate Stats on Scroll
    function animateStats() {
        const stats = document.querySelectorAll('.stat-card h3');
        stats.forEach(stat => {
            const finalValue = parseInt(stat.textContent.replace(/,/g, ''));
            let current = 0;
            const increment = finalValue / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    stat.textContent = finalValue.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        });
    }

    // Intersection Observer untuk Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('dashboard-stats')) {
                    animateStats();
                }
                if (entry.target.classList.contains('action-grid')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                if (entry.target.classList.contains('recent-activity')) {
                    entry.target.querySelectorAll('.activity-item').forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe sections
    const statsSection = document.querySelector('.dashboard-stats');
    const actionsSection = document.querySelector('.action-grid');
    const activitySection = document.querySelector('.recent-activity');
    
    if (statsSection) observer.observe(statsSection);
    if (actionsSection) observer.observe(actionsSection.parentElement);
    if (activitySection) observer.observe(activitySection);

    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const userProfile = document.querySelector('.user-profile');
        if (userProfile && !userProfile.contains(e.target)) {
            if (userDropdown) userDropdown.classList.remove('active');
        }
    });

    // Smooth scrolling untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mobile Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const navMenuMobile = document.querySelector('.nav-menu');
            if (navMenuMobile) {
                navMenuMobile.classList.toggle('active');
            }
        });
    }

    // Book Slider Auto-scroll
    const bookSlider = document.querySelector('.books-slider');
    if (bookSlider) {
        setInterval(() => {
            bookSlider.scrollLeft += 220;
            if (bookSlider.scrollLeft >= bookSlider.scrollWidth - bookSlider.clientWidth) {
                bookSlider.scrollLeft = 0;
            }
        }, 3000);
    }

    // ==================== FUNGSI CRUD (GLOBAL) ====================
    window.loadCrudData = loadCrudData;
});

// FUNGSI CRUD GLOBAL (TIDAK BERUBAH)
function loadCrudData() {
    const crudTable = document.getElementById('crudTable');
    if (!crudTable) return;
    
    const books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
    const tbody = crudTable.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = books.map(book => `
            <tr>
                <td>${book.id}</td>
                <td>${book.judul}</td>
                <td>${book.penulis}</td>
                <td>${book.tahun}</td>
                <td>
                    <button onclick="editBook(${book.id})" class="btn-edit">Edit</button>
                    <button onclick="deleteBook(${book.id})" class="btn-delete">Hapus</button>
                </td>
            </tr>
        `).join('') || '<tr><td colspan="5" style="text-align:center;padding:20px;">📚 Belum ada data buku</td></tr>';
    }
}

window.editBook = function(id) {
    const books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
    const book = books.find(b => b.id == id);
    if (book) {
        const judul = prompt('Edit Judul:', book.judul);
        const penulis = prompt('Edit Penulis:', book.penulis);
        const tahun = prompt('Edit Tahun:', book.tahun);
        
        if (judul && penulis && tahun) {
            books.forEach(b => {
                if (b.id == id) {
                    b.judul = judul;
                    b.penulis = penulis;
                    b.tahun = tahun;
                }
            });
            localStorage.setItem('libraryBooks', JSON.stringify(books));
            loadCrudData();
        }
    }
}

window.deleteBook = function(id) {
    if (confirm('Hapus buku ini?')) {
        let books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
        books = books.filter(book => book.id != id);
        localStorage.setItem('libraryBooks', JSON.stringify(books));
        loadCrudData();
    }
}

// Export functions untuk global access
window.toggleDropdown = toggleDropdown;
window.checkLoginStatus = checkLoginStatus;
