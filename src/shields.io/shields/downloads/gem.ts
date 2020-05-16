// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Gem (/gem/dv/:gem/:version) */
export const label = `Gem`;
/** URL for Gem (/gem/dv/:gem/:version) */
export const url = (gem: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/gem/dv/${gem}/${version}`, options);