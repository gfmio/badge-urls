// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (/npm/:interval/:scope?/:packageName) */
export const label = `npm`;
/** URL for npm (/npm/:interval/:scope?/:packageName) */
export const url = (interval: string, scope: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/${interval}/${scope}?/:packageName`, options);