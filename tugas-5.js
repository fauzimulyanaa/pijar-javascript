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
let text = "Hello World";
let letter = text.charAt(0);
console.log(letter);

// includes
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(7));

// slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const favorites = fruits.slice(1, 4);
console.log(favorites);

// splice
const food = ["Pizza", "Burger", "Pasta", "Hot Dog"];
food.splice(1, 0, "Tacos");
console.log(food);

// push
const food1 = ["Pizza", "Burger", "Pasta", "Hot Dog"];
food1.push("sushi");
console.log(food1);

//pop
food1.pop();
console.log(food1);

// Math

const nilai = 80.67;
console.log(Math.floor(nilai));
