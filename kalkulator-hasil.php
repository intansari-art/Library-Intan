<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Kalkulator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-brand">The Rooted Library</div>
        <a href="uji-coba.html" class="login-btn">← Kembali</a>
    </nav>

    <section class="hero">
        <div class="container">
            <h1>📊 Hasil Perhitungan</h1>
            <div id="hasilDisplay" class="hasil-box">
                <p>Memuat hasil...</p>
            </div>
        </div>
    </section>

    <script>
        const a1 = sessionStorage.getItem('calc_a1');
        const a2 = sessionStorage.getItem('calc_a2');
        const op = sessionStorage.getItem('calc_op');
        
        const display = document.getElementById('hasilDisplay');
        
        if (a1 && a2 && op) {
            let hasil, operator;
            const num1 = parseFloat(a1);
            const num2 = parseFloat(a2);
            
            switch(op) {
                case '+': hasil = num1 + num2; operator = '+'; break;
                case '-': hasil = num1 - num2; operator = '-'; break;
                case '*': hasil = num1 * num2; operator = '×'; break;
                case '/': 
                    hasil = num2 !== 0 ? num1 / num2 : 'Error: Tidak bisa dibagi nol';
                    operator = '÷'; 
                    break;
            }
            
            display.innerHTML = `
                <h2 style="font-size: 3rem; color: #ff6b35;">
                    ${a1} ${operator} ${a2} = <strong>${hasil}</strong>
                </h2>
                <p style="font-size: 1.5rem;">Hasil: <span style="color:#ff6b35;">${hasil}</span></p>
            `;
        } else {
            display.innerHTML = '<h2>❌ Tidak ada data perhitungan</h2><p>Kembali ke <a href="uji-coba.html">Uji Coba</a></p>';
        }
    </script>
</body>
</html>
