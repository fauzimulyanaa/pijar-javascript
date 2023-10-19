const button = document.querySelector("#btn");
const inputFiled = document.querySelector("#input-nilai");

let arr = [];
button.addEventListener("click", () => {
  const hasil = Number(inputFiled.value);
  if (!isNaN(hasil)) {
    arr.push(hasil);
    alert("Nilai sudah masuk!!");
  } else {
    alert("Input harus berupa Number");
  }
});

const cekBtn = document.querySelector("#btn-cek");
const result = document.querySelector("#rata-rata");
const grade = document.querySelector("#grade");
const tampilNilai = document.querySelector(".tampilNilai");

cekBtn.addEventListener("click", () => {
  let rataRata = arr.reduce((nilaiAwal, item) => nilaiAwal + item) / arr.length;
  result.innerHTML = rataRata;
  tampilNilai.innerHTML = arr.join(", ");

  if (rataRata >= 90) {
    grade.innerHTML = "A";
  } else if (rataRata >= 80) {
    grade.innerHTML = "B";
  } else if (rataRata >= 70) {
    grade.innerHTML = "C";
  } else if (rataRata >= 60) {
    grade.innerHTML = "D";
  } else {
    grade.innerHTML = "E";
  }
});
