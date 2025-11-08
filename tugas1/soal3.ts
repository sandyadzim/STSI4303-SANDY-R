// NIM: 049234875

const batasAkhir: number = 85;

function bilanganPrima(num: number): boolean {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

let hasilPrima: number[] = [];

for (let i = 2; i <= batasAkhir; i++) {
  if (bilanganPrima(i)) {
    hasilPrima.push(i);
  }
}

console.log(hasilPrima.join(", "));

