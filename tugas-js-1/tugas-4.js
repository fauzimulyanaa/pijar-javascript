let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

/*
soal a  
Ubahlah data tersebut menggunakan spread operator menjadi:
name: nama anda
email: email anda
hobby: hobi anda
*/
const newData = { ...data };

newData.name = "Fauzi Mulyana";
newData.email = "fauzi.mulyanaa9@gmail.com";
newData.hobby = "Gaming";

console.log(newData);

// soal b, Ambilah data “street dan city” tersebut menggunakan destructuring

const {
  address: { street, city },
} = data;

console.log(street);
console.log(city);
