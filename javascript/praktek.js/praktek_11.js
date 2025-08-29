// Pengulangan 
// perulangan akan membantu kita mengeksekusi kode yang berulang-ulang ,berapa pun yang kita mau. Ada lima macam bentuk perulangan di javascript. Secara umum, perulangan ini dibagi dua.
// yaitu:counted loop dan uncounted loop => loop yang terhitung dan tidak terhitung
// counted loop merupakan perulangan yang jelas dan sudah jelas jumlah banyak perulangannya.
// sedangkan uncounted loop, merupakan perulangan yang tidak jelas berapa kali ia harus mengulang.
// perulangan yang termasuk ke dalam counted loop:perulangan for, perulangan foreach, perulangan repeat
// perulangan yang termasuk ke dalam uncounted loop:perulangan while, perulangan do/while

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// for loop
for ( a = 1; a < 5; a++) {
console.log(a);
}

// for loop 
// digunakan jika jumlah perulangan sudah jelas.
for (let b = 1; b < 5; b++) {
    console.log("perulangan ke-" + b);
}

// while loop
// digunakan untuk jika perulangan tergantung kondisi, dan kita belum tahu berapa kali akan mengulang.
let i = 1;
while (i < 11) {
    console.log("angka: " + i);
    i++;
}
// do...while loop
// hampir sama dengan while, tetapi minimal satu kali dijalankan meskipun kondisi salah.
// let b = 6;
// do {
//     console.log("sapi: " + b);
//     b++;
// } while (b >= 5);
let e = 6;
do {
    console.log("sapi: " + e);
    e++;
} while (e <= 5);

// for...of loop 
// digunakan untuk mengulang isi array.
let buah = ["apel","jeruk","mangga"];
for (let item of buah) {
    console.log("ini adalah buah " + item);
}

// for...in loop
// digunakan untuk mengulang properti (key) dari object
let siswa = { 
    nama: "budi", umur: 16, jurusan:"RPL"};
for (let key in siswa) {
    console.log(key + ": " + siswa[key]);
}
let siswa2 = { 
    nama: "gundam", umur: 24, jurusan:"TKR"};
for (let key in siswa) {
    console.log(key + ": " + siswa2[key]);
}
let siswa3 = { 
    nama: "setan", umur: 10.000, jurusan:"TKR"};
for (let key in siswa) {
    console.log(key + ": " + siswa3[key]);
}
let siswa4 = { 
    nama: "harry", umur: 18, jurusan:"MAGIC"};
for (let key in siswa) {
    console.log(key + ": " + siswa4[key]);
}