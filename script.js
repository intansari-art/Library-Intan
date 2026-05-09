document.addEventListener('DOMContentLoaded', function() {
    
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
        }, 5); // Cepat tapi smooth
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
            
            // Simpan data
            sessionStorage.setItem('calc_a1', angka1);
            sessionStorage.setItem('calc_a2', angka2);
            sessionStorage.setItem('calc_op', operasi);
            
            // Buka hasil di tab baru
            window.open('kalkulator-hasil.html', '_blank');
        });
    }

    // 3. LOGIN SYSTEM
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
            } else {
                message.innerHTML = '<p style="color:red;">❌ Login gagal! Username atau password salah</p>';
            }
        });
    }

    // 4. CRUD DATABASE (Local Storage)
    const crudForm = document.getElementById('crudForm');
    const crudTable = document.getElementById('crudTable');
    
    if (crudForm && crudTable) {
        // Load data
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

    function loadCrudData() {
        const books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
        const tbody = document.querySelector('#crudTable tbody');
        tbody.innerHTML = books.map(book => `
            <tr>
                <td>${book.id}</td>
                <td>${book.judul}</td>
                <td>${book.penulis}</td>
                <td>${book.tahun}</td>
                <td>
                    <button onclick="editBook(${book.id})">Edit</button>
                    <button onclick="deleteBook(${book.id})" style="background:red;">Hapus</button>
                </td>
            </tr>
        `).join('') || '<tr><td colspan="5">Belum ada data</td></tr>';
    }
});

function editBook(id) {
    alert(`Edit buku ID: ${id}`);
}

function deleteBook(id) {
    if (confirm('Hapus buku ini?')) {
        let books = JSON.parse(localStorage.getItem('libraryBooks') || '[]');
        books = books.filter(book => book.id != id);
        localStorage.setItem('libraryBooks', JSON.stringify(books));
        loadCrudData();
    }
}
