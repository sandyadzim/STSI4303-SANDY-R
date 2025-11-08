// NIM: 049234875

const nim: number = 75;
const step: number = 9;
const batasCetak: number = 10;

let hasilDeret: string = "";

for (let i = 0; i < batasCetak; i++) {
    const nilai: number = nim + (i * step);
    hasilDeret += nilai;

    if (i < batasCetak - 1) {
      hasilDeret += ", ";
    }
}

console.log(hasilDeret);