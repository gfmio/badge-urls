// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Stack Exchange questions (/stackexchange/:stackexchangesite/t/:query) */
export const label = `Stack Exchange questions`;
/** URL for Stack Exchange questions (/stackexchange/:stackexchangesite/t/:query) */
export const url = (stackexchangesite: string, query: string, options?: ShieldsIOOptions) => urlWithOptions(`/stackexchange/${stackexchangesite}/t/${query}`, options);