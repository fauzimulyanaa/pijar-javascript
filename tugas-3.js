const printSegitiga = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    console.log("Parameter harus angka!");
  } else {
    for (let i = num; i >= 1; i--) {
      let a = "";
      for (let j = 1; j <= i; j++) {
        a += j;
      }
      console.log(a);
    }
  }
};

printSegitiga(9);
