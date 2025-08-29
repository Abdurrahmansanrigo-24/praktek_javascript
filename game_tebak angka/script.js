// Membuat angka random antara 1 - 10
let angkaBenar = Math.floor(Math.random() * 10) + 1;

function tebak() {
  let input = document.getElementById("tebakan").value;
  let hasil = document.getElementById("hasil");

  if (input == angkaBenar) {
    hasil.innerHTML = "🎉 Selamat! Tebakan kamu benar!";
    hasil.style.color = "green";
  } else if (input > angkaBenar) {
    hasil.innerHTML = "Terlalu besar, coba angka lebih kecil!";
    hasil.style.color = "red";
  } else {
    hasil.innerHTML = "Terlalu kecil, coba angka lebih besar!";
    hasil.style.color = "red";
  }
}
