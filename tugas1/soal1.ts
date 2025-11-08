// NIM: 049234875

const tinggiSegitiga: number = 5;

for (let i = 1; i <= tinggiSegitiga; i++) {
  let baris: string = "";
  for (let j = 1; j <= i; j++) {
    baris += j + " ";
  }
  console.log(baris);
}