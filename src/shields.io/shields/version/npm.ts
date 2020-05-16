// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (/npm/v/:packageName) */
export const label = `npm`;
/** URL for npm (/npm/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/v/${packagename}`, options);