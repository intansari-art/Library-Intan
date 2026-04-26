// FIX IMMEDIATE - Jalankan saat load
document.addEventListener('DOMContentLoaded', function() {
    // Force show dashboard
    document.getElementById('dashboard').style.display = 'block';
    
    // Load semua konten
    setTimeout(() => {
        initApp();
    }, 100);
});

// Fungsi showMenu FIXED
function showMenu(menuId) {
    console.log('Switching to:', menuId); // Debug
    
    // Hide semua sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show target section
    const targetSection = document.getElementById(menuId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        
        // Load content berdasarkan menu
        switch(menuId) {
            case 'katalog':
                loadBooks();
                break;
            case 'ulasan':
                loadComments();
                break;
            case 'uji':
                generatePHPProgress();
                break;
        }
    }
    
    // Update nav active
    document.querySelectorAll('.nav-left a').forEach(link => {
        link.classList.remove('nav-active');
    });
    event.target.closest('a').classList.add('nav-active');
}// Data Buku Batak Toba (5+ buku)
const booksData = [
    {
        id: 1,
        title: "Tarombo ni Raja Sisingamangaraja XII",
        author: "Dr. Parulian Simanjuntak",
        year: 2015,
        description: "Sejarah lengkap silsilah Raja Sisingamangaraja XII dan keturunannya"
    },
    {
        id: 2,
        title: "Adat Alem Batak Toba",
        author: "Mangaradja Onggang Parlindungan",
        year: 1998,
        description: "Pedoman lengkap adat istiadat dan upacara adat Batak Toba"
    },
    {
        id: 3,
        title: "Gorga Batak: Seni dan Filosofinya",
        author: "Dr. Sautmegin Situmorang",
        year: 2020,
        description: "Studi mendalam tentang motif ukiran gorga dan makna filosofinya"
    },
    {
        id: 4,
        title: "Saur Matua ni Batak Toba",
        author: "Pdt. Dr. J. L. S. Hutabarat",
        year: 1985,
        description: "Kumpulan pepatah bijak Batak Toba beserta tafsirannya"
    },
    {
        id: 5,
        title: "Marga-Marga Batak Toba Lengkap",
        author: "Tim Peneliti Budaya Batak",
        year: 2022,
        description: "Daftar lengkap 119 marga Batak Toba beserta asal-usul dan distribusi"
    },
    {
        id: 6,
        title: "Ulos Batak: Kain Pusaka",
        author: "Dr. Mariati Sitorus",
        year: 2019,
        description: "Sejarah, jenis, dan makna filosofis kain ulos Batak Toba"
    }
];

// Data komentar awal
let comments = [
    {
        id: 1,
        author: "Sangap Sian Toraja",
        username: "@bataktoba_lover",
        text: "Koleksi bukunya luar biasa lengkap! Referensi adat Batak yang susah ditemukan di perpustakaan biasa. Terima kasih The Rooted Library!",
        date: "3 jam lalu",
        likes: 12
    },
    {
        id: 2,
        author: "Juan Siagian",
        username: "",
        text: "Platform digital yang sangat membantu pelestarian budaya Batak Toba. Mudah digunakan dan responsif!",
        date: "1 hari lalu",
        likes: 8
    },
    {
        id: 3,
        author: "Maria Lumban Tobing",
        username: "",
        text: "Sering pakai untuk referensi tugas kuliah tentang gorga. Koleksi lengkap dan update terus.",
        date: "2 hari lalu",
        likes: 5
    }
];

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    loadBooks();
    loadComments();
    setupEventListeners();
    generatePHPProgress();
}

// Navigation
function showMenu(menuId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(menuId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('nav a[onclick*="showMenu"]').forEach(link => {
        link.style.background = 'transparent';
    });
    event.target.closest('a').style.background = 'rgba(255,255,255,0.2)';
    
    // Smooth scroll to top
    document.documentElement.scrollTop = 0;
    
    // Load specific content
    switch(menuId) {
        case 'katalog':
            loadBooks();
            break;
        case 'ulasan':
            loadComments();
            break;
        case 'uji':
            generatePHPProgress();
            break;
    }
}

// Modal Functions
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('username').focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginForm').reset();
    document.body.style.overflow = 'auto';
}

// PHP Progress Generator (1-1000 hari)
function generatePHPProgress() {
    const hariList = document.querySelector('.hari-list');
    if (!hariList) return;
    
    let html = '';
    for (let i = 1; i <= 1000; i++) {
        html += `<p>Ini adalah hari ke-${i} belajar PHP</p>`;
    }
    hariList.innerHTML = html;
}

// Search & Filter Books
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query)
    );
    renderBooks(filteredBooks);
}

// Render Books Grid
function loadBooks(filteredBooks = booksData) {
    const bookGrid = document.getElementById('bookGrid');
    if (!bookGrid) return;
    
    bookGrid.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Penulis:</strong> ${book.author} | <strong>${book.year}</strong></p>
            <p>${book.description}</p>
            <div style="margin-top: 1.5rem;">
                <button onclick="borrowBook(${book.id})" class="borrow-btn">Pinjam Buku</button>
            </div>
        `;
        bookGrid.appendChild(bookCard);
    });
    
    // Add hover effects
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-12px)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
    });
}

// Borrow book demo
function borrowBook(bookId) {
    const book = booksData.find(b => b.id === bookId);
    alert(`📖 Buku "${book.title}" oleh ${book.author} berhasil dipinjam!\n\nFitur peminjaman digital akan segera tersedia.`);
}

// Comments System
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const text = commentInput.value.trim();
    
    if (text.length < 10) {
        alert('❌ Ulasan minimal 10 karakter!');
        commentInput.focus();
        return;
    }
    
    if (text.length > 500) {
        alert('❌ Ulasan maksimal 500 karakter!');
        return;
    }
    
    const newComment = {
        id: Date.now(),
        author: `Pengunjung #${Math.floor(Math.random() * 1000)}`,
        text: text,
        date: 'Baru saja',
        likes: 0
    };
    
    comments.unshift(newComment);
    commentInput.value = '';
    
    loadComments();
    alert('✅ Ulasan berhasil dikirim! Terima kasih telah berkontribusi.');
    
    // Auto-scroll to top of comments
    document.getElementById('commentsContainer').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

function loadComments() {
    const container = document.getElementById('commentsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    comments.slice(0, 10).forEach(comment => { // Max 10 comments
        const commentBox = document.createElement('div');
        commentBox.className = 'comment-box';
        commentBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h4 style="flex: 1;">${comment.author}</h4>
                <small style="white-space: nowrap;">${comment.date}</small>
            </div>
            <p style="margin: 1rem 0; padding: 1rem; background: rgba(245,245,220,0.5); border-radius: 0.75rem; border-left: 4px solid var(--batak-blue);">${comment.text}</p>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <small style="color: #666;">👍 ${comment.likes} suka</small>
                <small style="color: #888; font-size: 0.85rem;">${new Date().toLocaleDateString('id-ID', { 
                    weekday: 'short', 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</small>
            </div>
        `;
        container.appendChild(commentBox);
    });
}

// Login Handler (3 kondisi seperti tugas)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Kondisi 1: Input kosong
    if (!username || !password) {
        alert('❌ Input tidak lengkap! Mohon isi Username/ID dan Password.');
        document.getElementById('username').focus();
        return;
    }
    
    // Kondisi 2: Login gagal (salah)
    if (username !== 'admin' || password !== 'batak123') {
        alert('❌ Login gagal! Username atau Password salah.\n💡 Demo: admin / batak123');
        return;
    }
    
    // Kondisi 3: Login sukses
    alert('🎉 Login sukses! Selamat datang di The Rooted Library.\n\nAnda akan diarahkan ke Dashboard.');
    closeModal();
    showMenu('dashboard');
    
    // Update login button
    document.querySelector('.login-btn').textContent = '👤 Admin (Logged In)';
    document.querySelector('.login-btn').style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
});

// Event Listeners Setup
function setupEventListeners() {
    // Close modal on outside click / ESC
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('loginModal');
        if (e.target === modal) closeModal();
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Search on Enter
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBooks();
    });
    
    // Comment on Ctrl+Enter
    document.getElementById('commentInput')?.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') addComment();
    });
    
    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// PWA Features (Optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Ignore if no sw.js
        });
    });
}

// Performance: Lazy load images (if any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
}

// Local Storage for comments persistence
function saveComments() {
    localStorage.setItem('rootedLibraryComments', JSON.stringify(comments));
}

function loadCommentsFromStorage() {
    const saved = localStorage.getItem('rootedLibraryComments');
    if (saved) {
        comments = JSON.parse(saved);
    }
}

// Init storage on load
loadCommentsFromStorage();

// Export functions for global access
window.showMenu = showMenu;
window.showLoginForm = showLoginForm;
window.closeModal = closeModal;
window.searchBooks = searchBooks;
window.addComment = addComment;
window.borrowBook = borrowBook;
