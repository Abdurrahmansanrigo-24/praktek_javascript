// Jika umur >= 17, tampilkan: "Boleh mengendarai motor"
// Jika umur < 17, tampilkan: "Belum cukup umur"

let umur;
umur = 17;
if (umur >= 17){
    console.log("Boleh mengndarai motor")
} else if (umur < 17) {
    console.log("tidak boleh mengendarai motor")
}

// Buat program yang menilai nilai siswa berdasarkan angka:
// 90 - 100 → "A"
// 80 - 89 → "B" 70 - 79 → "C"
// Di bawah 70 → "D"


let nilai = 10;
let grade;

if (nilai >= 90 && nilai <= 100){
    grade = "A";
} else if (nilai >= 80 && nilai <= 89){
    grade = "B";
}
 else if (nilai >= 70 && nilai <= 79){
    grade = "C";
} else {
    grade ="D"
} 
console.log("Nilai Anda: "+ grade)

// Gunakan switch untuk membuat program memilih bahasa:
// Input: "id", "en", "ar"
// Output: "Halo", "Hello", "Marhaban"

let id = "ar" ;
switch(id){
    case "ida":
       console.log("hallo");
       break
    case "ar":
       console.log("hello");
       break
    case "Marhaban":
       console.log("Marhaban");
       break
}