const pijarFood = (harga, voucher, jarak, pajak) => {
  let diskonVoucer = 0;
  let biayaPengiriman = 0;
  let Hargapajak = pajak ? (harga * 5) / 100 : 0;

  // menghitung potongan berdasarkan voucher
  if (voucher === "PIJARFOOD5" && harga >= 50000) {
    diskonVoucer = (harga * 50) / 100;
    if (diskonVoucer > 50000) {
      diskonVoucer = 50000;
    }
  } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
    diskonVoucer = (harga * 60) / 100;
    if (diskonVoucer > 30000) {
      diskonVoucer = 30000;
    }
  } else {
    console.log("Voucer yang anda tidak tersedia");
  }

  // menghitung potongan berdasarkan biayaPengiriman
  if (jarak > 2) {
    biayaPengiriman = (jarak - 2) * 3000 + 5000;
  } else {
    biayaPengiriman = 5000;
  }

  console.log(`Harga: ${harga}`);
  console.log(`Potongan: ${diskonVoucer}`);
  console.log(`Biaya Antar: ${biayaPengiriman}`);
  console.log(`Pajak: ${Hargapajak}`);
  console.log(`SubTotal: ${harga - diskonVoucer + biayaPengiriman + Hargapajak}`);
};

pijarFood(75000, "PIJARFOOD5", 5, false);
// pijarFood(100000, "DITRAKTIRPIJAR", 1, false);
