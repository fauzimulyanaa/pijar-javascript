const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 1000);
};
const cekBulan = (err, month) => {
  if (err) {
    console.error(err);
  } else {
    const result = month.map((item) => {
      console.log(`Month : ${item}`);
    });
  }
};

getMonth(cekBulan);
