import { ShieldsIOOptions, ShieldsIOColor, urlWithOptions } from "./options";
import replaceAll from "../utils/replaceAll";

const colorWithoutHash = (color: string) =>
  color.startsWith("#") ? color.slice(1) : color;

const escapeString = (s: string) =>
  replaceAll(replaceAll(s, "-", "--"), "_", "__");

/** Static badges https://img.shields.io */
export const staticBadge = (
  label: string,
  message: string,
  color: ShieldsIOColor | string,
  options?: ShieldsIOOptions
) =>
  urlWithOptions(
    `/badge/${escapeString(label)}-${escapeString(message)}-${escapeString(
      colorWithoutHash(color)
    )}`,
    options
  );
