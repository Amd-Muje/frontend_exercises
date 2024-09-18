const mobil = {
  no_plat: "RI_01",
  nama: "avanza",
  brand: "Toyota",
  warna: ["silver", "hitam"],
  bahan_bakar: ["Bbm", "listrik"],
  maksimal_penumpang: 2,
};

const myText = document.getElementById("myText");

const bahanBakarDanWarna = [...mobil.bahan_bakar,...mobil.warna];
const kendaraan = [mobil.no_plat,mobil.nama,mobil.brand,bahanBakarDanWarna.join(" & "),mobil.maksimal_penumpang];


kendaraan.forEach((value) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    myText.appendChild(paragraph)
});


// console.log(bahanBakar);

// const a = {
//     nama : "muje",
//     umur : 23,
// };

// a.forEach(nama => {
//     console.log(nama)
// });

// const buah = ["apel", "mangga", "jeruk"];
// buah.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// output :
// apel 0 ["apel", "mangga", "jeruk"]
// mangga 1 ["apel", "mangga", "jeruk"]
// jeruk 2 ["apel", "mangga", "jeruk"]