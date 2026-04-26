// Data
const booksData = [
    { title: 'Tarombo Batak Toba', author: 'Dr. S. Siatas' },
    { title: 'Adat Istiadat Batak Toba', author: 'Opung Borobudur' },
    { title: 'Sejarah Marga Batak', author: 'Prof. T. Sihombing' },
    { title: 'Seni Gondang Batak', author: 'Dr. R. Pasaribu' },
    { title: 'Pustaha Batak Toba', author: 'J. Voorhoeve' },
    { title: 'Hula-hula & Boru', author: 'Dr. J. Nainggolan' },
    { title: 'Marga Samosir', author: 'T. L. Hutabarat' },
    { title: 'Batak Toba Architecture', author: 'A. Sinaga' }
];

const reviewsData = [
    { name: 'S. Sinaga', text: 'Mauliate boru! Website boru naeng mangalusi budaya Batak. Au do marhobas!', date: '2024-12-01' },
    { name: 'R. Sitorus', text: 'Au marsangap do koleksi buku ni. Gampang do cari informasi tentang adat Batak.', date: '2024-12-02' },
    { name: 'M. Panjaitan', text: 'Horja naeng! Website dohot koleksi naeng mangulusi budaya au. Mauliate Godang!', date: '2024-12-03' }
];

let reviews = [...reviewsData];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    renderReviews();
    generatePHPdays();
    
    // Login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === '123456') {
            alert('🎉 Login berhasil!\nSelamat datang Admin The Rooted Library\n\nID: ' + username);
            closeLogin();
        } else if (!username || !password) {
            alert('⚠️ Input tidak lengkap!\nMohon lengkapi username dan password.');
        } else {
            alert('❌ Login gagal!\nUsername atau password salah.\n\nDemo: admin / 123456');
        }
    });
});

// Navigation
function showMenu(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) closeLogin();
};

// Search Books
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const bookGrid = document.getElementById('bookGrid');
    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
    renderBooks(filteredBooks);
}

document.getElementById('searchInput').addEventListener('input', searchBooks);

function renderBooks(booksToShow = booksData) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = booksToShow.map(book => `
        <div class="book-box">
            <h4>${book.title}</h4>
            <p><strong>Oleh:</strong> ${book.author}</p>
        </div>
    `).join('');
}

// Reviews
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reviewName').value;
    const text = document.getElementById('reviewText').value;
    
    if (name && text) {
        const newReview = {
            name: name,
            text: text,
            date: new Date().toISOString().split('T')[0]
        };
        reviews.unshift(newReview);
        renderReviews();
        this.reset();
        alert('✅ Terima kasih atas ulasannya! 🙏');
    }
});

function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = reviews.slice(0, 6).map(review => `
        <div class="review-box">
            <h4>${review.name}</h4>
            <p>${review.text}</p>
            <small><i class="far fa-calendar-alt"></i> ${review.date}</small>
        </div>
    `).join('');
}

// PHP Days
function generatePHPdays() {
    let days = 'Ini adalah hari ke-1 belajar PHP\n';
    for (let i = 2; i <= 5; i++) {
        days += `Ini adalah hari ke-${i} belajar PHP\n`;
    }
    days += '\n... dan seterusnya sampai hari ke-1000!\n\n';
    days += 'Tugas: Buatlah halaman web seperti ini sampai ke-1000.';
    document.getElementById('phpDays').textContent = days;
}

// Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const result = document.getElementById('calcResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = '<span style="color:orange;">Masukkan kedua bilangan!</span>';
        return;
    }
    
    let output;
    switch(op) {
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '×': output = num1 * num2; break;
        case '÷': output = num2 !== 0 ? num1 / num2 : 'Error: ÷ 0'; break;
    }
    result.innerHTML = `<strong style="color:#1976D2; font-size:1.3rem;">Hasil: ${output}</strong>`;
}

// Database Login Test
function testLogin() {
    const username = document.getElementById('dbUsername').value;
    const password = document.getElementById('dbPassword').value;
    const result = document.getElementById('loginResult');
    
    if (!username || !password) {
        result.innerHTML = '<span style="color:orange;">⚠️ Input tidak lengkap!</span>';
    } else if (username === 'admin' && password === 'admin123') {
        result.innerHTML = '<span style="color:green;">✅ Login sukses!</span>';
    } else {
        result.innerHTML = '<span style="color:red;">❌ Login gagal!</span>';
    }
}

// WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent('Halo The Rooted Library! Saya tertarik dengan koleksi budaya Batak Toba digital.');
    window.open(`https://wa.me/6281226423048?text=${message}`, '_blank');
}

// Smooth scroll & active nav
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
});
