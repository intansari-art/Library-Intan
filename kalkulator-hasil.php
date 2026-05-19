<!DOCTYPE html>
<html>
<head>
    <title>Hasi Kalkulator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container" style="text-align: center; padding: 100px 20px;">
        <h1 style="color: #ff9800; font-size: 48px;">HASIL</h1>
        <div id="result" style="font-size: 36px; margin: 40px 0; color: #2196f3;"></div>
        <a href="uji-coba.html" class="cta-btn" style="display: inline-block;">Kembali</a>
    </div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const a1 = urlParams.get('a1');
        const a2 = urlParams.get('a2');
        const op = urlParams.get('op');
        
        if (a1 && a2 && op) {
            let hasil;
            switch(op) {
                case '+': hasil = parseFloat(a1) + parseFloat(a2); break;
                case '-': hasil = parseFloat(a1) - parseFloat(a2); break;
                case '*': hasil = parseFloat(a1) * parseFloat(a2); break;
                case '/': hasil = parseFloat(a1) / parseFloat(a2); break;
            }
            document.getElementById('result').textContent = `${a1} ${op} ${a2} = ${hasil}`;
        }
    </script>
</body>
</html>
