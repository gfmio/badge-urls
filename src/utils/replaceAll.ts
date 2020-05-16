export default function replaceAll(
  input: string,
  needle: string,
  replacement: string
) {
  const output: string[] = [];
  let n = 0;
  while (n < input.length) {
    if (input.substr(n).startsWith(needle)) {
      output.push(replacement);
      n = n + needle.length;
    } else {
      output.push(input[n]);
      n++;
    }
  }
  return output.join("");
}
