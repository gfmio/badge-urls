// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (scoped) (/npm/v/:scope/:packageName) */
export const label = `npm (scoped)`;
/** URL for npm (scoped) (/npm/v/:scope/:packageName) */
export const url = (scope: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/v/${scope}/${packagename}`, options);