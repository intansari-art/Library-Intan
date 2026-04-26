// Navigation
function showMenu(menu) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(menu).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('.nav-link').classList.add('active');
}

// Modal functions
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function showRegisterModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
}

// Login form
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('ID dan Password tidak boleh kosong!');
        return;
    }
    
    // Demo login - ganti dengan logic backend
    if (username === 'admin' && password === 'batak123') {
        alert('Login sukses! Selamat datang ' + username);
        document.getElementById('loginBtn').innerHTML = '<i class="fas fa-user-check"></i> ' + username;
        closeModal();
    } else {
        alert('Login gagal! ID atau Password salah.');
    }
});

// Register form
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pendaftaran berhasil! Silakan login dengan akun baru Anda.');
    closeRegisterModal();
    document.getElementById('loginModal').style.display = 'block';
});

// Generate PHP progress (sampai hari ke-1000 dengan scroll)
function generatePHPProgress() {
    const phpBox = document.getElementById('phpProgress');
    let html = '';
    for (let i = 1; i <= 1000; i++) {
        html += `Ini adalah hari ke-${i} aku belajar PHP<br>`;
    }
    phpBox.innerHTML = html;
}

// Calculator
function calculate() {
   
