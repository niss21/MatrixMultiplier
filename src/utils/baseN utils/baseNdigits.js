const baseNdigits = (base) => {
  const digits = [];
  if (base <= 10) {
    for (let i = 0; i < base; i++) {
      digits.push(i.toString());
    }
  } else {
    for (let i = 0; i < 10; i++) {
      digits.push(i.toString());
    }
    for (let i = 10; i < base; i++) {
      digits.push(String.fromCharCode(i + 55));
    }
  }
  return digits;
};

export { baseNdigits };
