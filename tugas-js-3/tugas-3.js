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

pesanTiketKonser(70)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

function mahasiswaTerdaftar(cekMahasiswa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mahasiswa = ["budi", "Jono", "Asep", "Dadang"];
      let cek = mahasiswa.find((item) => {
        return item === cekMahasiswa;
      });
      if (cek) {
        resolve(`Mahasiswa ada terdaftar ${cek}`);
      } else {
        reject(new Error("mahasiswa tidak terdaftar"));
      }
    }, 2000);
  });
}

mahasiswaTerdaftar("dudung")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
