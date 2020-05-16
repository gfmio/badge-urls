import findFirstAvailableName from "./findFirstAvailableName";
import safeName from "./safeName";

export default function firstAvailableSafeName(
  baseName: string,
  names: string[]
) {
  const name = findFirstAvailableName(safeName(baseName), names);
  names.push(name);
  return name;
}
