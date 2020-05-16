// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for CRAN/METACRAN (/cran/v/:packageName) */
export const label = `CRAN/METACRAN`;
/** URL for CRAN/METACRAN (/cran/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/cran/v/${packagename}`, options);