const hariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(`Hari ini adalah hari kerja, hari ${cek}`);
      } else {
        reject(new Error("hari ini bukan hari kerja"));
      }
    }, 1000);
  });
};

hariKerja("senin")
  .then((result) => {
    console.log(result);
    //digunakan untuk menetapkan tindakan yang akan diambil ketika Promise selesai (resolved) dengan sukses
  })
  .catch((err) => {
    console.log(err.message);
    //digunakan untuk menangani pengecualian yang terjadi selama eksekusi Promise, seperti kesalahan jaringan atau kesalahan
  });

async function cekHari(day) {
  try {
    const result = await hariKerja(day);
    console.log(result);
    //biasanya kita sisipkan code javascript yang mungkin terjadi error
  } catch (error) {
    console.log(error.message);
    //pada blok inilah yang akan menangkap error yang terjadi pada blok Try apabila pada blok Try  error muncul
  }
}

cekHari("sabtu");

