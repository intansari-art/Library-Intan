<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Kalkulator - The Rooted Library</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand"><h2>The Rooted Library</h2></div>
            <ul class="nav-menu">
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="katalog.html">Katalog</a></li>
                <li><a href="event.html">Event</a></li>
                <li><a href="diskusi.html">Diskusi</a></li>
                <li><a href="uji-coba.html">Uji Coba</a></li>
            </ul>
            <div class="nav-right">
                <a href="login.html" class="login-btn">Login Anggota</a>
            </div>
        </nav>
    </header>

    <section class="kalkulator-hasil">
        <div class="container">
            <div class="hasil-container">
                <h1>Hasil Perhitungan</h1>
                <div id="hasil-display" class="hasil-box">
                    <p>Masukkan angka di halaman kalkulator terlebih dahulu</p>
                </div>
                <a href="uji-coba.html" class="cta-btn">← Kembali ke Uji Coba</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>The Rooted Library</h3>
                    <p>Perpustakaan Khusus Budaya Batak Toba</p>
                </div>
                <div class="footer-section">
                    <h4>About Me</h4>
                    <p>Dibuat dengan ❤️ untuk melestarikan budaya Batak Toba</p>
                    <a href="https://www.youtube.com/watch?v=Vu-5KnFsIKw" target="_blank">Tonton Adat Batak Toba</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 The Rooted Library. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <div class="whatsapp-btn">
        <a href="https://wa.me/6281226423048" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>
    </div>

    <script>
        // Ambil data dari localStorage atau URL params
        const urlParams = new URLSearchParams(window.location.search);
        const angka1 = urlParams.get('a1') || localStorage.getItem('angka1');
        const angka2 = urlParams.get('a2') || localStorage.getItem('angka2');
        const operasi = urlParams.get('op') || localStorage.getItem('operasi');
        
        if (angka1 && angka2 && operasi) {
            let hasil;
            let operator;
            
            switch(operasi) {
                case '+':
                    hasil = parseFloat(angka1) + parseFloat(angka2);
                    operator = '+';
                    break;
                case '-':
                    hasil = parseFloat(angka1) - parseFloat(angka2);
                    operator = '-';
                    break;
                case '*':
                    hasil = parseFloat(angka1) * parseFloat(angka2);
                    operator = '×';
                    break;
                case '/':
                    hasil = parseFloat(angka2) !== 0 ? parseFloat(angka1) / parseFloat(angka2) : 'Tidak bisa dibagi nol';
                    operator = '÷';
                    break;
            }
            
            document.getElementById('hasil-display').innerHTML = `
                <h2>${angka1} ${operator} ${angka2} = <span style="color:#ff6b35;font-size:2.5rem;font-weight:700;">${hasil}</span></h2>
                <p style="font-size:1.2rem;margin-top:1rem;">Hasil: <strong>${hasil}</strong></p>
            `;
        }
    </script>
    <script src="script.js"></script>
</body>
</html>
