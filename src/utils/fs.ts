import * as fs from "fs";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

const before = <F extends (...args: any[]) => any>(
  fn: F,
  beforeHandler: (...args: Parameters<F>) => void
) => (...args: Parameters<F>): ReturnType<F> => {
  beforeHandler(...args);
  return fn(...args);
};

export const readFile = before(readFileAsync, (path) =>
  console.log(`Reading ${path}...`)
);
export const writeFile = before(writeFileAsync, (path) =>
  console.log(`Writing ${path}...`)
);
export const mkdir = before(mkdirAsync, (path) =>
  console.log(`Creating ${path}...`)
);
