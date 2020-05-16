// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm bundle size (/bundlephobia/:format/:packageName) */
export const label = `npm bundle size`;
/** URL for npm bundle size (/bundlephobia/:format/:packageName) */
export const url = (format: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/bundlephobia/${format}/${packagename}`, options);