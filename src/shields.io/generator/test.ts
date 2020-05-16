import * as path from "path";
import {
  pathToRegexp,
  parse,
  Key,
  tokensToFunction,
  tokensToRegexp,
} from "path-to-regexp";
import { readFile } from "../../utils/fs";
import { SHIELDS_IO_DATA_FILE } from "../constants";

async function main() {
  const data = JSON.parse(
    (await readFile(SHIELDS_IO_DATA_FILE, {
      encoding: "utf-8",
    })) as string
  );

  const item = data["activity"][2];

  const keys: Key[] = [];
  const regexp = pathToRegexp(item.url, keys);
  const tokens = parse(item.url);
  const regexp2 = tokensToRegexp(tokens);
  const fn = tokensToFunction(tokens);

  console.log(regexp);
  console.log(keys);
  console.log(tokens);
  console.log(regexp2);
  console.log(
    fn({ interval: "day", user: "gfmio", repo: "example-calculator" })
  );
}

main();
