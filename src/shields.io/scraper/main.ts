import scrapeAllCategoryPages from "./scrapeAllCategoryPages";
import scrapeCategories from "./scrapeCategories";
import { SHIELDS_IO_DATA_FILE } from "../constants";
import { writeFile } from "../../utils/fs";

async function main() {
  try {
    const categories = await scrapeCategories();
    const data = await scrapeAllCategoryPages(categories);
    await writeFile(SHIELDS_IO_DATA_FILE, JSON.stringify(data, undefined, 2));
  } catch (e) {
    console.error(e);
  }
}

main();
