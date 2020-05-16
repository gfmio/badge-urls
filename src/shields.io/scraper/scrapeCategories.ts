import scrapeUrl from "../../utils/scrapeUrl";
import {
  SHIELDS_IO_CATEGORY_PAGE_PREFIX,
  SHIELDS_IO_BASE_URL,
} from "../constants";

const findCategories = (document: Document) => {
  const categories: string[] = [];

  document
    .querySelectorAll<HTMLAnchorElement>("#app > div a")
    .forEach(({ href }) => {
      if (!href.startsWith(SHIELDS_IO_CATEGORY_PAGE_PREFIX)) {
        throw new Error(
          `URL does not start with ${SHIELDS_IO_CATEGORY_PAGE_PREFIX}`
        );
      }
      const category = href.substr(SHIELDS_IO_CATEGORY_PAGE_PREFIX.length);
      categories.push(category);
    });

  return categories;
};

export default async function scrapeCategories() {
  return findCategories(await scrapeUrl(SHIELDS_IO_BASE_URL));
}
