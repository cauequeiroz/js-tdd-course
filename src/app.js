const a = 3;
const b = 2;
const c = 'caue';

const sum = () => a + b + c;

sum();

if ( a > b ) {
  sum();

  if (a < b) {
    sum();
  }
}
