// Common functions untuk semua halaman
document.addEventListener('DOMContentLoaded', function() {
    // Active nav highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Search functionality (untuk katalog.html)
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            document.querySelectorAll('.book-card').forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }
}

// Review form (untuk ulasan.html)
function initReviews() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reviewName').value;
            const text = document.getElementById('reviewText').value;
            
            const reviewList = document.getElementById('reviewList');
            const newReview = document.createElement('div');
            newReview.className = 'review-item';
            newReview.innerHTML = `
                <strong>${name}</strong> - ${new Date().toLocaleDateString('id-ID')}
                <p>${text}</p>
            `;
            reviewList.insertBefore(newReview, reviewList.firstChild);
            
            this.reset();
        });
    }
}

// Uji coba functions (untuk uji-coba.html)
function generatePHP() {
    let output = '';
    for(let i = 1; i <= 1000; i++) {
        output += `<div class="blue-box">Ini adalah hari ke-${i} belajar PHP</div>`;
    }
    document.querySelector('#uji-coba .uji-coba-grid').innerHTML = `
        <div style="grid-column: 1 / -1;">
            <h3>Hasil Generate 1000 Hari PHP:</h3>
            <div style="max-height: 400px; overflow-y: auto;">${output}</div>
            <button class="btn" onclick="location.reload()">Reset</button>
        </div>
    `;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = '<p style="color: red;">Masukkan angka yang valid!</p>';
        resultDiv.style.display = 'block';
        return;
    }
    
    let result;
    switch(op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if(num2 === 0) {
                resultDiv.innerHTML = '<p style="color: red;">Tidak bisa dibagi nol!</p>';
                resultDiv.style.display = 'block';
                return;
            }
            result = num1 / num2; break;
    }
    
    resultDiv.innerHTML = `<h4>Hasil: ${num1} ${op} ${num2} = <strong>${result}</strong></h4>`;
    resultDiv.style.display = 'block';
}

function checkLogin() {
    const id = document.getElementById('loginID').value;
    const pass = document.getElementById('loginPass').value;
    const result = document.getElementById('loginResult');
    
    if (!id || !pass) {
        result.innerHTML = '<p style="color: orange; font-weight: bold;">Input tidak lengkap!</p>';
        result.style.background = '#fff3cd';
    } else if (id === 'admin' && pass === 'batak123') {
        result.innerHTML = '<p style="color: green; font-weight: bold;">Login sukses!</p>';
        result.style.background = '#d4edda';
    } else {
        result.innerHTML = '<p style="color: red; font-weight: bold;">Login gagal!</p>';
        result.style.background = '#f8d7da';
    }
    result.style.display = 'block';
}
