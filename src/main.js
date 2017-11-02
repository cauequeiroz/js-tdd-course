const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => {
  if (y === 0) {
    return 'Não é possível divisão por zero!';
  }

  return x / y;
};

export { sum, sub, mult, div };
