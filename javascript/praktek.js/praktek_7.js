//  tipe data non primitif
nama = "tipe data nomor(numbers), tulisan (strings), salah benar(bolean), tidak dijelaskan(undefined), tipe data kosong(null)"
console.log('berikut adalah total text :' +nama.lenght)
// berikut adalah sintak untuk mengambil test dalam variable
console.log(nama.slice(0,3))

// berikut adalah sintak untuk mengganti kalimat
let kalimat = "saya suka apple"
console.log(kalimat.replace("apple","ayam"))
// berikut adalah sintak untuk membuat huruf menjadi kapital
let a = "ayam"
console.log(a.toLocaleUpperCase())
// berikut adalah sintak untuk membuat huruf menjadi kecil
let b = "KUCING"
console.log(b.toLocaleLowerCase())
// berikut adalah sintak untuk menghapus jarak diawal dan diakhir
let c = '       kambing dan bebek       '
console.log(c.trim())

let d = 'ayam-kucing-kambing-bebek'
console.log(d.split("-"))

// template literal
let e = 'ari';
let umur = 24
let text = 'Nama saya' + e +'umur saya' + umur
console.log(text)
 
// latihan
let kata = "ngoding sederhana"
let kata2 = "dan juga menyenangkan"
// 1 ambil kata (ngoding)
// 2 ambil hana di kata sederhana
// 3 gabungkan kata dan kata2 jadi 1baris 
// 4 buat huruf besar semua kata

console.log(kata.slice(0,8))
console.log(kata.slice(13,19))
let kata3 = kata + '' + kata2;
console.log(kata3,)
console.log(kata.toLocaleUpperCase())