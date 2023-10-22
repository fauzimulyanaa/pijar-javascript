const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function searchName(findName, limit, callback) {
  let found = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i].toLowerCase().includes(findName.toLowerCase())) {
      found.push(name[i]);
      if (found.length === limit) {
        break;
      }
    }
  }

  callback(found);
}

function tampilkanHasil(results) {
  if (results.length > 0) {
    results.forEach((name) => {
      console.log(`Hasil Pencarian : ${name}`);
    });
  } else {
    console.log("Tidak ditemukan hasil yang sesuai.");
  }
}

searchName("ol", 3, tampilkanHasil);
