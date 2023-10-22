function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (dataArray.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  }
  const result = dataArray.filter((item) => {
    return item > nilaiAwal && item < nilaiAkhir;
  });

  if (result.length === 0) {
    return "Nilai Tidak Ditemukan!";
  }
  result.sort((a, b) => a - b);
  return result;
}

console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
