document.addEventListener('DOMContentLoaded', function() {
    // 1. PHP 1000 HARI SIMULATION ✅
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

    // 2. KALKULATOR ✅
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

    // 3. LOGIN SYSTEM - UPGRADED ✅
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
                message.innerHTML = '<p style="color:green;">✅ Login sukses! Redirect ke Dashboard...</p>';
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);
                // AUTO REDIRECT KE DASHBOARD
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                message.innerHTML = '<p style="color:red;">❌ Login gagal!<br>Username: <strong>admin</strong><br>Password: <strong>batak123</strong></p>';
            }
        });
    }

    // 4. CRUD DATABASE - IMPROVED ✅
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
                    judul, penulis, tahun,
                    tanggal: new Date().toLocaleDateString('id-ID')
                });
                localStorage.setItem('libraryBooks', JSON.stringify(books));
                loadCrudData();
                this.reset();
                alert('✅ Buku berhasil ditambahkan!');
            }
        });
    }

    // ==================== DASHBOARD FEATURES BARU ====================

    // Check Login Status di Semua Halaman
    checkLoginStatus();

    // Animate Stats Counter
    function animateStats() {
        const stats = document.querySelectorAll('.stat-card h3');
        stats.forEach(stat => {
            const final = parseInt(stat.textContent.replace(/,/g, ''));
            let current = 0;
            const increment = final / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= final) {
                    stat.textContent = final.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        });
    }

    // Intersection Observer untuk Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.matches('.dashboard-stats')) {
                    animateStats();
                }
                if (entry.target.matches('.action-grid, .action-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe Elements
    document.querySelectorAll('.dashboard-stats, .action-grid').forEach(el => {
        observer.observe(el);
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('active');
        });
    }

});

// ==================== GLOBAL FUNCTIONS ====================

// Check & Update Login Status
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
    const username = sessionStorage.getItem('username') || 'Anggota';
    
    // Update Navbar
    const userMenu = document.getElementById('userMenu');
    const loginBtn = document.getElementById('loginBtn');
    const navUsername = document.getElementById('navUsername');
    
    if (isLoggedIn && userMenu && loginBtn) {
        userMenu.style.display = 'flex';
        loginBtn.style.display = 'none';
        if (navUsername) navUsername.textContent = username;
    } else if (userMenu && loginBtn) {
        userMenu.style.display = 'none';
        loginBtn.style.display = 'flex';
    }
    
    // Update Dashboard
    const dashboardUsername = document.getElementById('dashboardUsername');
    const lastLogin = document.getElementById('lastLogin');
    if (dashboardUsername) dashboardUsername.textContent = username;
    if (lastLogin) lastLogin.textContent = new Date().toLocaleString('id-ID', { 
        hour: '2-digit', minute: '2-digit', 
        day: 'numeric', month: 'short' 
    });
}

// Toggle User Dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

// Logout
function logout() {
    if (confirm('Logout dari akun?')) {
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('username');
        checkLoginStatus();
        alert('✅ Logout berhasil!');
    }
}

// WhatsApp
function openWhatsApp() {
    const username = sessionStorage.getItem('username') || 'Pengunjung';
    const message = `Halo Admin, ${username} ada pertanyaan tentang The Rooted Library`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
}

// CRUD Functions (Global)
function loadCrudData() {
    const crudTable = document.getElementById('crudTable');
    if (!crudTable) return;
    
    const books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
    const tbody = crudTable.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = books.map(book => `
            <tr>
                <td>${new Date(book.id).toLocaleDateString('id-ID')}</td>
                <td>${book.judul}</td>
                <td>${book.penulis}</td>
                <td>${book.tahun}</td>
                <td>
                    <button class="btn-edit" onclick="editBook(${book.id})">✏️ Edit</button>
                    <button class="btn-delete" onclick="deleteBook(${book.id})">🗑️ Hapus</button>
                </td>
            </tr>
        `).join('') || '<tr><td colspan="5" style="text-align:center;color:#666;padding:30px;">📚 Belum ada buku di perpustakaan</td></tr>';
    }
}

function editBook(id) {
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
            alert('✅ Buku berhasil diupdate!');
        }
    }
}

function deleteBook(id) {
    if (confirm('Hapus buku permanen?')) {
        let books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
        books = books.filter(book => book.id != id);
        localStorage.setItem('libraryBooks', JSON.stringify(books));
        loadCrudData();
        alert('🗑️ Buku berhasil dihapus!');
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hide dropdown on outside click
document.addEventListener('click', (e) => {
    const userProfile = document.querySelector('.user-profile');
    const dropdown = document.getElementById('userDropdown');
    if (userProfile && dropdown && !userProfile.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});
