// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Hex.pm (/hexpm/l/:packageName) */
export const label = `Hex.pm`;
/** URL for Hex.pm (/hexpm/l/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/hexpm/l/${packagename}`, options);