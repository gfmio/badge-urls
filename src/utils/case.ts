import { isAlphaNumeric } from "./character-tests";

export function toCase(input: string, upperCaseFirst: boolean) {
  const chars = input.split("");
  const output: string[] = [];
  let upperCaseNext = upperCaseFirst;
  for (const char of chars) {
    if (isAlphaNumeric(char)) {
      output.push(upperCaseNext ? char.toUpperCase() : char.toLowerCase());
      upperCaseNext = false;
    } else {
      upperCaseNext = true;
    }
  }
  return output.join("");
}

export function camelCase(input: string) {
  return toCase(input, false);
}

export function pascalCase(input: string) {
  return toCase(input, true);
}
