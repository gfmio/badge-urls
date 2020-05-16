// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm bundle size (scoped version) (/bundlephobia/:format/:scope/:packageName/:version) */
export const label = `npm bundle size (scoped version)`;
/** URL for npm bundle size (scoped version) (/bundlephobia/:format/:scope/:packageName/:version) */
export const url = (format: string, scope: string, packagename: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/bundlephobia/${format}/${scope}/${packagename}/${version}`, options);