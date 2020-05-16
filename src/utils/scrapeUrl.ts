import { JSDOM } from "jsdom";
import superagent from "superagent";

export default async function scrapeUrl(url: string) {
  console.log(`Fetching ${url}...`);
  const response = await superagent.get(url);
  if (!response.ok) {
    throw new Error(`GET ${url} failed`);
  }

  const dom = new JSDOM(response.text);
  const { window } = dom;
  const { document } = window;
  return document;
}
