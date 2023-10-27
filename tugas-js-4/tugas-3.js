const divideAndSort = (angka) => {
  if (typeof angka !== "number") {
    return "parameter harus berisi angka!";
  }
  const arr = angka.toString().split("0");
  const newArr = arr.map((item) => item.split("").sort().join(""));
  console.log(parseInt(newArr.join("")));
};

divideAndSort(5956560159466056);
