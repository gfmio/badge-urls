import scrapeShieldPage from "./scrapeCategoryPage";
import { ShieldsIOShieldData } from "../types";
import {
  SHIELDS_IO_BASE_URL,
  SHIELDS_IO_CATEGORY_PAGE_PREFIX,
} from "../constants";

const categoryPageUrl = (category: string) =>
  SHIELDS_IO_BASE_URL + SHIELDS_IO_CATEGORY_PAGE_PREFIX + category;

export default async function scrapeAllCategoryPages(
  categories: string[]
): Promise<Record<string, ShieldsIOShieldData[]>> {
  const result = {} as Record<string, ShieldsIOShieldData[]>;
  for (const category of categories) {
    const url = categoryPageUrl(category);
    result[category] = await scrapeShieldPage(url);
  }
  return result;
}
