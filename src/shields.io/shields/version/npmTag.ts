// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (tag) (/npm/v/:packageName/:tag) */
export const label = `npm (tag)`;
/** URL for npm (tag) (/npm/v/:packageName/:tag) */
export const url = (packagename: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/v/${packagename}/${tag}`, options);