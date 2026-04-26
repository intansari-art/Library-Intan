<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Kalkulator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Hasil Perhitungan</h1>
        <?php
        if ($_POST) {
            $angka1 = $_POST['angka1'];
            $angka2 = $_POST['angka2'];
            $operasi = $_POST['operasi'];
            
            switch($operasi) {
                case '+':
                    $hasil = $angka1 + $angka2;
                    $operator = '+';
                    break;
                case '-':
                    $hasil = $angka1 - $angka2;
                    $operator = '-';
                    break;
                case '*':
                    $hasil = $angka1 * $angka2;
                    $operator = '×';
                    break;
                case '/':
                    $hasil = ($angka2 != 0) ? $angka1 / $angka2 : 'Tidak bisa dibagi nol';
                    $operator = '÷';
                    break;
            }
            
            echo "<div class='hasil-kalkulator'>";
            echo "<h2>{$angka1} {$operator} {$angka2} = <span style='color:#ff6b35;font-size:2rem;'>$hasil</span></h2>";
            echo "<a href='uji-coba.html' class='cta-btn'>Kembali</a>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
