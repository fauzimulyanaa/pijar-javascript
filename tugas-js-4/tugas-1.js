function reverseStr(text) {
  return text.split(" ").reverse().join(" ");
}

console.log(reverseStr("Saya Belajar Javascript"));

function cekPalindrom(text) {
  const arrayText = text.split("");
  let indexAkhir = arrayText.length - 1;

  for (let i = 0; i < indexAkhir; i++) {
    if (arrayText[i].toLowerCase() !== arrayText[indexAkhir]) {
      console.log("kata bukan palindrom");
      return;
    }
    indexAkhir--;
  }
  console.log("kata adalah palindrom");
}

cekPalindrom("Burung");
