function calcular(a, b) {
  if (a > b) {
    return a - b;
  }

  console.log(a + b);
}

const x = calcular(8, 3);
const y = calcular(2, 5);

console.log(x, y);