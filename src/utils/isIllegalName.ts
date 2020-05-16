const ILLEGAL_NAMES = [
  "package",
  "module",
  "var",
  "const",
  "let",
  "import",
  "export",
];

const isIllegalName = (name: string) => ILLEGAL_NAMES.includes(name);

export default isIllegalName;
