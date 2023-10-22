const printSegitiga = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    console.log("Parameter harus angka!");
  } else {
    for (let i = num; i >= 1; i--) {
      let cetakBaris = "";
      for (let j = 1; j <= i; j++) {
        cetakBaris += j;
      }
      console.log(cetakBaris);
    }
  }
};

printSegitiga(NaN);
