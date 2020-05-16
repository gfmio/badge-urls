// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (scoped with tag) (/npm/v/:scope/:packageName/:tag) */
export const label = `npm (scoped with tag)`;
/** URL for npm (scoped with tag) (/npm/v/:scope/:packageName/:tag) */
export const url = (scope: string, packagename: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/v/${scope}/${packagename}/${tag}`, options);