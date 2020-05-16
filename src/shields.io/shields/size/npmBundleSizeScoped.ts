// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm bundle size (scoped) (/bundlephobia/:format/:scope/:packageName) */
export const label = `npm bundle size (scoped)`;
/** URL for npm bundle size (scoped) (/bundlephobia/:format/:scope/:packageName) */
export const url = (format: string, scope: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/bundlephobia/${format}/${scope}/${packagename}`, options);