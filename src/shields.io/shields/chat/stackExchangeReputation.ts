// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Stack Exchange reputation (/stackexchange/:stackexchangesite/r/:query) */
export const label = `Stack Exchange reputation`;
/** URL for Stack Exchange reputation (/stackexchange/:stackexchangesite/r/:query) */
export const url = (stackexchangesite: string, query: string, options?: ShieldsIOOptions) => urlWithOptions(`/stackexchange/${stackexchangesite}/r/${query}`, options);