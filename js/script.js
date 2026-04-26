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
// Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Pilih angka dan klik hitung';
        return;
    }
    
    let result;
    switch(operator) {
        case 'Tambah (+)':
            result = num1 + num2;
            break;
        case 'Kurang (-)':
            result = num1 - num2;
            break;
        case 'Kali (×)':
            result = num1 * num2;
            break;
        case 'Bagi (÷)':
            result = num2 !== 0 ? num1 / num2 : 'Tidak bisa dibagi nol';
            break;
    }
    
    document.getElementById('result').innerHTML = `Hasil: ${num1} ${operator.replace(/[^\+\-×÷]/g, '')} ${num2} = ${result}`;
}

// Database CRUD
let books = [
    { id: 1, judul: 'Tarombo Batak', penulis: 'Sutan Panggabean', tahun: 2005 },
    { id: 2, judul: 'Gorga Tradisional', penulis: 'Parada Harahap', tahun: 2018 },
    { id: 3, judul: 'Saur Matua', penulis: 'Mangaradja Paran', tahun: 1992 },
    { id: 4, judul: 'Ulos Batak', penulis: 'Mariati Sitorus', tahun: 2020 }
];
let nextId = 5;

function renderTable() {
    const tbody = document.querySelector('#dbTable tbody');
    tbody.innerHTML = '';
    
    books.forEach(book => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.judul}</td>
            <td>${book.penulis}</td>
            <td>${book.tahun}</td>
            <td>
                <button class="btn-edit" onclick="editBook(${book.id})">Simpan</button>
                <button class="btn-delete" onclick="deleteBook(${book.id})">Hapus</button>
            </td>
        `;
    });
}

function addBook() {
    const judul = document.getElementById('dbJudul').value;
    const penulis = document.getElementById('dbPenulis').value;
    const tahun = parseInt(document.getElementById('dbTahun').value);
    
    if (judul && penulis && !isNaN(tahun)) {
        books.push({ id: nextId++, judul, penulis, tahun });
        renderTable();
        clearForm();
    } else {
        alert('Mohon lengkapi semua field!');
    }
}

function editBook(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        const newJudul = prompt('Edit Judul:', book.judul);
        const newPenulis = prompt('Edit Penulis:', book.penulis);
        const newTahun = prompt('Edit Tahun:', book.tahun);
        
        if (newJudul && newPenulis && newTahun) {
            book.judul = newJudul;
            book.penulis = newPenulis;
            book.tahun = parseInt(newTahun);
            renderTable();
        }
    }
}

function deleteBook(id) {
    if (confirm('Yakin ingin menghapus buku ini?')) {
        books = books.filter(b => b.id !== id);
        renderTable();
    }
}

function clearForm() {
    document.getElementById('dbJudul').value = '';
    document.getElementById('dbPenulis').value = '';
    document.getElementById('dbTahun').value = '';
}

// Ulasan/Diskusi
document.getElementById('ulasanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const comment = this.querySelector('textarea').value;
    
    if (name && comment) {
        const ulasanList = document.getElementById('ulasanList');
        const newUlasan = document.createElement('div');
        newUlasan.className = 'ulasan-item';
        newUlasan.innerHTML = `
            <h4>${name} - Pengunjung Baru</h4>
            <p>${comment}</p>
            <span>${new Date().toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</span>
        `;
        ulasanList.insertBefore(newUlasan, ulasanList.firstChild);
        
        this.reset();
    }
});

// Search katalog
document.querySelector('.search-box button').addEventListener('click', function() {
    const query = document.getElementById('searchBook').value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const author = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || author.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// WhatsApp
function openWhatsApp() {
    const message = 'Halo, saya tertarik dengan The Rooted Library. ';
    const url = `https://wa.me/6281226423048?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Generate PHP progress on uji-coba load
    generatePHPProgress();
    
    // Render database table
    renderTable();
    
    // Auto-generate PHP progress when uji-coba section is shown
    const ujiCobaSection = document.getElementById('uji-coba');
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (ujiCobaSection.classList.contains('active')) {
                    generatePHPProgress();
                }
            }
        });
    });
    
    observer.observe(ujiCobaSection, { attributes: true });
});

// Smooth scrolling for PHP box
document.getElementById('phpProgress').addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollTop += e.deltaY;
});
function calculate() {
   
