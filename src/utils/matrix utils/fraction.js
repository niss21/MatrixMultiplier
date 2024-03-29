const gcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a <= b) return gcd(b % a, a);
  if (b < a) return gcd(b, a % b);
};

const frac = (num1, num2) => {
  const gcdVal = gcd(Math.abs(num1), Math.abs(num2));
  const num = num1 / gcdVal;
  const deno = num2 / gcdVal;
  const absNum = Math.abs(num);
  const absDeno = Math.abs(deno);
  if (num * deno >= 0) {
    return absDeno === 1 ? `${absNum}` : `${absNum}/${absDeno}`;
  } else {
    return absDeno === 1 ? `${-absNum}` : `${-absNum}/${absDeno}`;
  }
};

const fracDiv = (frac1, frac2) => {
  const frac1Arr = frac1.split("/");
  const frac2Arr = frac2.split("/");
  const num1 = parseInt(frac1Arr[0]);
  const num2 = parseInt(frac2Arr[0]);
  const deno1 = parseInt(frac1Arr[1]) || 1;
  const deno2 = parseInt(frac2Arr[1]) || 1;

  const newNum = num1 * deno2;
  const newDeno = deno1 * num2;

  return frac(newNum, newDeno);
};

const fracMul = (frac1, frac2) => {
  const frac1Arr = frac1.split("/");
  const frac2Arr = frac2.split("/");
  const num1 = parseInt(frac1Arr[0]);
  const num2 = parseInt(frac2Arr[0]);
  const deno1 = parseInt(frac1Arr[1]) || 1;
  const deno2 = parseInt(frac2Arr[1]) || 1;

  const newNum = num1 * num2;
  const newDeno = deno1 * deno2;

  return frac(newNum, newDeno);
};

const fracAdd = (frac1, frac2) => {
  const frac1Arr = frac1.split("/");
  const frac2Arr = frac2.split("/");
  const num1 = parseInt(frac1Arr[0]);
  const num2 = parseInt(frac2Arr[0]);
  const deno1 = parseInt(frac1Arr[1]) || 1;
  const deno2 = parseInt(frac2Arr[1]) || 1;

  const newNum = num1 * deno2 + num2 * deno1;
  const newDeno = deno1 * deno2;

  return frac(newNum, newDeno);
};

const fracSub = (frac1, frac2) => {
  const frac1Arr = frac1.split("/");
  const frac2Arr = frac2.split("/");
  const num1 = parseInt(frac1Arr[0]);
  const num2 = parseInt(frac2Arr[0]);
  const deno1 = parseInt(frac1Arr[1]) || 1;
  const deno2 = parseInt(frac2Arr[1]) || 1;

  const newNum = num1 * deno2 - num2 * deno1;
  const newDeno = deno1 * deno2;

  return frac(newNum, newDeno);
};

export { frac, fracDiv, fracMul, fracAdd, fracSub };
