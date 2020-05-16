const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);
const a = "a".charCodeAt(0);
const z = "z".charCodeAt(0);
const zero = "0".charCodeAt(0);
const nine = "9".charCodeAt(0);

const isInRange = (n: number, min: number, max: number) => n >= min && n <= max;

export const isUpperCaseLatin = (s: string, n: number = 0) =>
  isInRange(s.charCodeAt(n), A, Z);
export const isLowerCaseLatin = (s: string, n: number = 0) =>
  isInRange(s.charCodeAt(n), a, z);
export const isNumber = (s: string, n: number = 0) =>
  isInRange(s.charCodeAt(n), zero, nine);
export const isLatin = (s: string, n: number = 0) =>
  isLowerCaseLatin(s, n) || isUpperCaseLatin(s, n);
export const isAlphaNumeric = (s: string, n: number = 0) =>
  isNumber(s, n) || isLatin(s, n);
