export default function CheckPIS(inputPis) {
  let ftap = '3298765432';
  let total = 0;
  let rest = 0;
  let strRest = '';

  if (inputPis == '' || inputPis == null) {
    return false;
  }

  for (let i = 0; i <= 9; i++) {
    const resultado = inputPis.slice(i, i + 1) * ftap.slice(i, i + 1);
    total = +resultado;
  }

  rest = total % 11;

  if (rest != 0) {
    rest = 11 - rest;
  }

  if (rest == 10 || rest == 11) {
    strRest = rest + '';
    rest = strRest.slice(1, 2);
  }

  if (rest != inputPis.slice(10, 11)) {
    return false;
  }

  return true;
}
