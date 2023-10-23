// indexof untuk mengecek index dari sebua nilai dalam array
const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.indexOf(5));

// trim menghapus spasi
const name = "      fauzi mulyana    ";
console.log(name);

console.log(name.trim());

// concat menggabungkan array

const mahasiswa = ["Budi", "Jhon", "Dadang"];
const mahasiswaBaru = ["Asep", "Danang", "Rudi"];

console.log(mahasiswa.concat(mahasiswaBaru));

// chartAt
// adalah metode dalam JavaScript yang digunakan untuk mengambil karakter pada posisi tertentu dalam sebuah string
let text = "Hello World";
let letter = text.charAt(0);
console.log(letter);

// includes
// adalah metode dalam JavaScript yang digunakan untuk memeriksa apakah sebuah string atau array mengandung nilai tertentu
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(7));

// slice
// adalah metode yang tersedia dalam JavaScript yang digunakan untuk mengambil potongan (substring) dari string atau bagian dari sebuah array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const favorites = fruits.slice(1, 4);
console.log(favorites);

// splice
// adalah metode dalam JavaScript yang digunakan untuk memodifikasi isi dari sebuah array dengan menghapus, menambah, atau mengganti elemen-elemen dalam array. Metode ini mengubah array asli dan mengembalikan elemen-elemen yang dihapus dalam bentuk array baru.
const food = ["Pizza", "Burger", "Pasta", "Hot Dog"];
food.splice(1, 0, "Tacos");
console.log(food);

// push
// menambahkan elemen terakhir di array
const food1 = ["Pizza", "Burger", "Pasta", "Hot Dog"];
food1.push("sushi");
console.log(food1);

//pop
// menghapus elemt terkahir di array
food1.pop();
console.log(food1);

// Math
// pembulatan nilai

const nilai = 80.67;
console.log(Math.floor(nilai));

