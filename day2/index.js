// let umur = prompt("Masukan Umur Anda", 18); 

// if (umur < 17) {
//     console.log(`Umur Anda Belum cukup`);
// } else {
//     console.log(`Umur Anda Sudah Cukup`);
// }

// for(let i = 1; i <= 100 ; i++) {
//     if (i%5 == 0 && i%3 == 0) {
//         console.log(`BuzzFizz`);
//     } else if (i%5 == 0) {
//         console.log(`Buzz`);
//     }  else if (i%3 == 0) {
//         console.log(`Fizz`);
//     }   else {
//         console.log(`${i}`);
//     }
// }

const diberiDiskon = (harga, diskon) => harga - (harga * diskon / 100);


let hargaAseli = 100000;
let banyakDiskon = 20;
let hargaDiskon = diberiDiskon(hargaAseli, banyakDiskon);
console.log (`Harga setelah Diskon ` + hargaDiskon);

