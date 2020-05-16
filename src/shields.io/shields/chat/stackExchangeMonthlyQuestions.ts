// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Stack Exchange monthly questions (/stackexchange/:stackexchangesite/qm/:query) */
export const label = `Stack Exchange monthly questions`;
/** URL for Stack Exchange monthly questions (/stackexchange/:stackexchangesite/qm/:query) */
export const url = (stackexchangesite: string, query: string, options?: ShieldsIOOptions) => urlWithOptions(`/stackexchange/${stackexchangesite}/qm/${query}`, options);