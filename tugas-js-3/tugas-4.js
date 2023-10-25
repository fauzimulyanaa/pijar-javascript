async function printName() {
  try {
    let respone = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respone.json();
    data.map((item) => {
      console.log(item.name);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

printName();
