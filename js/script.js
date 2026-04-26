// MENU
function showMenu(menu){
    document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
    document.getElementById(menu).classList.add('active');
}

// LOGIN MODAL
function openLogin(){
    document.getElementById('login').style.display='block';
}
function closeLogin(){
    document.getElementById('login').style.display='none';
}

// LOGIN VALIDASI
function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u==""||p==""){
        alert("Input tidak lengkap");
    }else if(u=="admin" && p=="123"){
        alert("Login sukses");
    }else{
        alert("Login gagal");
    }
}

// ULASAN
function kirim(){
    let isi = document.getElementById("komen").value;
    let p = document.createElement("p");
    p.innerText = isi;
    document.getElementById("list").appendChild(p);
}

// KATALOG SEARCH
function cari(){
    let input = document.getElementById("search").value.toLowerCase();
    let buku = document.querySelectorAll(".buku");

    buku.forEach(b=>{
        b.style.display = b.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}
