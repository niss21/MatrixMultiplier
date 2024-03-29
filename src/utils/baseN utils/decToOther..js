const decToOther = (dec, base) => {
  if (dec <= 0) return "";
  if (dec === 1) return "1";
  let digit = dec % base;
  if (digit >= 10) digit = String.fromCharCode(55 + digit);
  return decToOther(Math.floor(dec / base), base) + digit.toString();
};

export { decToOther };
