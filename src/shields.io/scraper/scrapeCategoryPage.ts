import processRow from "./processRow";
import { ShieldsIOShieldData } from "../types";
import scrapeUrl from "../../utils/scrapeUrl";

function findShieldData(document: Document) {
  const items: ShieldsIOShieldData[] = [];
  document
    .querySelector<HTMLTableElement>("table")
    ?.querySelectorAll<HTMLTableRowElement>("tr")
    .forEach((row) => {
      items.push(processRow(row));
    });

  return items;
}

export default async function scrapeCategoryPage(url: string) {
  return findShieldData(await scrapeUrl(url));
}
