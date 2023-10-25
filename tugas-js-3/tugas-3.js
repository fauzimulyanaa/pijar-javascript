function pesanTiketKonser(jumlahTiket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tiketTersedia = 50;
      if (jumlahTiket <= tiketTersedia) {
        resolve(`Pemesanan berhasil untuk ${jumlahTiket} tiket.`);
      } else {
        reject(`Maaf, tiket habis. Hanya tersedia ${tiketTersedia} tiket.`);
      }
    }, 2000);
  });
}

pesanTiketKonser(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

function pesanKopi(jenisKopi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const menuKopi = {
        Americano: 5,
        Latte: 7,
        Espresso: 3,
      };
      if (menuKopi[jenisKopi] > 0) {
        resolve(`Pemesanan ${jenisKopi} berhasil.`);
      } else {
        reject(`Maaf, ${jenisKopi} tidak tersedia saat ini.`);
      }
    }, 2000);
  });
}

pesanKopi("Kapal api")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
