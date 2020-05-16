import { ShieldsIOShieldData } from "../types";
import * as path from "path";
import { writeFile, readFile, mkdir } from "../../utils/fs";
import { SHIELDS_IO_DATA_FILE } from "../constants";
import { camelCase } from "../../utils/case";
import firstAvailableSafeName from "../../utils/firstAvailableSafeName";
import generateShieldModule from "./generateShieldModule";

const AUTO_GENERATED_FILE_PREFIX = `// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.\n\n`;

const OUT_DIR = path.resolve(__dirname, "..", "shields");

async function generateAll(shieldData: Record<string, ShieldsIOShieldData[]>) {
  const categories = Object.keys(shieldData);
  const categoryNames: string[] = [];

  await mkdir(OUT_DIR, { recursive: true });

  for (const category of categories) {
    const categoryName = firstAvailableSafeName(
      camelCase(category),
      categoryNames
    );

    const categoryPath = path.join(OUT_DIR, categoryName);
    await mkdir(categoryPath, { recursive: true });

    const moduleNames: string[] = [];

    console.log(category);

    for (const { label, url } of shieldData[category]) {
      const moduleName = firstAvailableSafeName(camelCase(label), moduleNames);
      const moduleData =
        AUTO_GENERATED_FILE_PREFIX + generateShieldModule(label, url);
      await writeFile(path.join(categoryPath, moduleName + ".ts"), moduleData);
    }

    const categoryIndexFileContent = generateIndexFile(moduleNames);
    await writeFile(
      path.join(categoryPath, "index.ts"),
      categoryIndexFileContent
    );
  }

  const indexContent = generateIndexFile(categoryNames);
  await writeFile(path.join(OUT_DIR, "index.ts"), indexContent);
}

function generateIndexFile(files: string[]) {
  return (
    AUTO_GENERATED_FILE_PREFIX +
    files.map((name) => `export * as ${name} from './${name}';`).join("\n")
  );
  // const fileName = path.join(OUT_DIR, "index.ts");
  // await writeFile(fileName, moduleContent);
}

async function main() {
  const shieldData: Record<string, ShieldsIOShieldData[]> = JSON.parse(
    (await readFile(path.resolve(SHIELDS_IO_DATA_FILE), {
      encoding: "utf-8",
    })) as string
  );

  await generateAll(shieldData);
}

main();
