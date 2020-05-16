export default function findFirstAvailableName(
  baseName: string,
  existingNames: string[]
) {
  if (!existingNames.includes(baseName)) {
    return baseName;
  }
  let n = 2;
  let name = "";
  do {
    name = baseName + n.toString();
    n++;
  } while (existingNames.includes(name));
  return name;
}
