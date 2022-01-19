let panjang = 20.5;
let lebar = 30;
let harga = 1500000;

let luas = panjang * lebar;
let total = luas * harga;
let ppn = total * (15/100);
let tAkhir = total+ppn;

console.log("Nominal harga yang harus dibayar : " + tAkhir);