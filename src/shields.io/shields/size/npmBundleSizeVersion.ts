// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm bundle size (version) (/bundlephobia/:format/:packageName/:version) */
export const label = `npm bundle size (version)`;
/** URL for npm bundle size (version) (/bundlephobia/:format/:packageName/:version) */
export const url = (format: string, packagename: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/bundlephobia/${format}/${packagename}/${version}`, options);