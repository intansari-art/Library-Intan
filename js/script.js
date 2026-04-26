// Data Buku (akan dimuat saat katalog dibuka)
const booksData = [
    {
        title: "Tarombo ni Raja Sisingamangaraja",
        author: "Dr. Parulian Simanjuntak",
        description: "Sejarah lengkap keturunan Raja Sisingamangaraja XII"
    },
    {
        title: "Adat Batak Toba",
        author: "Mangaradja Onggang Parlindungan",
        description: "Pedoman lengkap adat istiadat Batak Toba"
    },
    {
        title: "Gorga dan Maknanya",
        author: "Dr. S. Situmorang",
        description: "Filosofi motif ukiran tradisional Batak"
    },
    {
        title: "Saur Matua ni Batak",
        author: "Pdt. Dr. J. L. S. Hutabarat",
        description: "Kearifan lokal Batak dalam kehidupan modern"
    },
    {
        title: "Marga-Marga Batak Toba",
        author: "Tim Peneliti Budaya Batak",
        description: "Daftar lengkap marga dan asal-usulnya"
    }
];

// Data Komentar Awal
let comments = [
    {
        author: "Sangap Sian Toraja",
        text: "Koleksi bukunya sangat lengkap! Banyak referensi tentang adat Batak yang susah ditemukan di perpustakaan biasa.",
        date: "2 hari lalu",
        username: "@bataktoba_lover"
    },
    {
        author: "Juan Siagian",
        text: "Platform yang sangat membantu pelestarian budaya Batak Toba. Terima kasih!",
        date: "5 hari lalu",
        username: ""
    },
    {
        author: "Maria Lumban Tobing",
        text: "Mudah digunakan dan responsif di HP. Saya sering pinjam buku tentang gorga untuk tugas kuliah.",
        date: "1 minggu lalu",
        username: ""
    }
];

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
    loadComments();
    setupEventListeners();
});

// Navigation
function showMenu(menuId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(menuId).classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load content if needed
    if (menuId === 'katalog') loadBooks();
    if (menuId === 'ulasan') loadComments();
}

// Modal Functions
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('username').focus();
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginForm').reset();
}

// Search Books
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const bookGrid = document.getElementById('bookGrid');
    
    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );
    
    renderBooks(filteredBooks);
}

// Render Books
function loadBooks(filteredBooks = booksData) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Penulis:</strong> ${book.author}</p>
            <p>${book.description}</p>
        `;
        bookCard.onclick = () => alert(`Buku "${book.title}" oleh ${book.author}\nFitur peminjaman akan segera hadir!`);
        bookGrid.appendChild(bookCard);
    });
}

// Comments Functions
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const text = commentInput.value.trim();
    
    if (!text) {
        alert('Mohon tulis ulasan terlebih dahulu!');
        commentInput.focus();
        return;
    }
    
    // Tambah komentar baru
    const newComment = {
        author: `Pengunjung ${Math.floor(Math.random() * 1000)}`,
        text: text,
        date: 'Baru saja',
        username: ''
    };
    
    comments.unshift(newComment);
    commentInput.value = '';
    
    loadComments();
    alert('✅ Ulasan berhasil dikirim! Terima kasih telah berpartisipasi.');
}

function loadComments() {
    const container = document.getElementById('commentsContainer');
    container.innerHTML = '';
    
    comments.forEach(comment => {
        const commentBox = document.createElement('div');
        commentBox.className = 'comment-box';
        commentBox.innerHTML = `
            <h4>${comment.author}</h4>
            <p>${comment.text}</p>
            <small>${comment.username}${comment.username ? ' - ' : ''}${comment.date}</small>
        `;
        container.appendChild(commentBox);
    });
}

// Login Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('❌ Input tidak lengkap! Mohon isi username dan password.');
        return;
    }
    
    // Demo credentials: admin / batak123
    if (username === 'admin' && password === 'batak123') {
        alert('🎉 Login sukses! Selamat datang di dashboard anggota The Rooted Library.');
        closeModal();
        showMenu('dashboard');
    } else {
        alert('❌ Login gagal! Username atau Password salah.\n💡 Coba: admin / batak123');
    }
});

// Event Listeners
function setupEventListeners() {
    // Close modal on outside click
    window.onclick = function(event) {
        const modal = document.getElementById('loginModal');
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Enter key for search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBooks();
        }
    });
    
    // Enter key for comment
    document.getElementById('commentInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            addComment();
        }
    });
    
    // Book cards hover effect
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.book-card')) {
            e.target.closest('.book-card').style.transform = 'translateY(-10px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.book-card')) {
            e.target.closest('.book-card').style.transform = 'translateY(0)';
        }
    });
}

// PWA Service Worker (Optional - untuk GitHub Pages)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('SW registered'))
            .catch(err => console.log('SW registration failed'));
    });
}
