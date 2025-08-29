// latihan :
// 1.buatlah perulangan yang menampilkan bilangan ganjil
// 2.buatlah perulangan yang menampilkan bilangan genap
// 3.buatlah perulangan yang menampilkan nama - nama teman kalian dari array
// 4.Bintang pola 5 kebawah
//*
//*
//*
//*
//*
// 5.bintang pola 5 kotak persegi
//*****
// 6.bintang pola segitiga menurun
//*
//**
//***
//****
//*****
// 7.bintang pola segitiga terbalik keatas
//*****
//****
//***
//**
//*
//Latihan 

// 1 
 console.log("bilangan ganjil")
for (let ganjil = 1; ganjil <=10; ganjil +=2 ) {
    console.log(ganjil);
}

// 2 
console.log("bilangan genap")
for (let genap = 2; genap <=10; genap +=2 ) {
    console.log(genap);
}

// 3 
console.log("teman saya")
let Nama = ['Abdurrahman'];
for (let Absen of Nama  ) {
    console.log('ini adalah ' + Nama)
}
let Nama2 = ['Amri'];
for (let Absen of Nama2  ) {
    console.log('ini adalah ' + Nama2)
}
let Nama3 = ['Alwi'];
for (let Absen of Nama3  ) {
    console.log('ini adalah ' + Nama3)
}

// 4 
console.log("bintang kebawah")
for (let bintang = 1; bintang <=5; bintang++ ) {
    console.log("*")
}
// 5 
console.log("Bintang Sejajar")
for (let bintang = 1; bintang <=1; bintang++ ) {
    console.log("*****")
}

// 6 
console.log("Bintang Segitiga Kebawah")
let bintang10 = 5;
for (let bintang = 1; bintang <= bintang10; bintang++ ) {
    let bintang10 ="";
    for (let bintang2 = 1; bintang2 <= bintang; bintang2++ ) {
        bintang10 += "*"
        }
    console.log(bintang10);
    }   


// 7 
console.log("bintang segitiga keatas kebalik")
let BintangKecil = 5;
for (let Bintang = BintangKecil; Bintang >= 1; Bintang--) {
  let BintangKecil = "";
  for (let BintangBesar = 1; BintangBesar <= Bintang; BintangBesar++) {
    BintangKecil += "*";
  }
  console.log(BintangKecil);
}