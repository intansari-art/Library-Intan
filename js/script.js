function showMenu(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function openLogin(){
document.getElementById('login').style.display='block';
}

function closeLogin(){
document.getElementById('login').style.display='none';
}

function login(){
let u=document.getElementById('user').value;
let p=document.getElementById('pass').value;

if(u=="" || p==""){
alert("Input tidak lengkap");
}else if(u=="admin" && p=="123"){
alert("Login sukses");
}else{
alert("Login gagal");
}
}

function kirim(){
let isi=document.getElementById("komen").value;
document.getElementById("list").innerHTML+=
"<div class='comment'>"+isi+"</div>";
}

function cari(){
let input=document.getElementById("search").value.toLowerCase();
document.querySelectorAll(".buku").forEach(b=>{
b.style.display=b.innerText.toLowerCase().includes(input)?"block":"none";
});
}
