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

function cekRataRata(nilaiUn) {
  if (arr.length === 0) {
    return null;
  }
  let rataRata = arr.reduce((nilaiAwal, item) => nilaiAwal + item) / arr.length;

  return Math.round(rataRata);
}

function cekGrade(nilai) {
  if (nilai >= 90) {
    grade.innerHTML = "A";
  } else if (nilai >= 80) {
    grade.innerHTML = "B";
  } else if (nilai >= 70) {
    grade.innerHTML = "C";
  } else if (nilai >= 60) {
    grade.innerHTML = "D";
  } else {
    grade.innerHTML = "E";
  }
}

cekBtn.addEventListener("click", () => {
  if (arr.length === 0) {
    alert("Anda harus menginputkan nilai terlebih dahulu");
    return;
  }
  let nilai = cekRataRata(arr);
  result.innerHTML = nilai;
  tampilNilai.innerHTML = arr.join(", ");

  cekGrade(nilai);
});
