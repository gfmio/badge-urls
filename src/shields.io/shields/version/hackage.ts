// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Hackage (/hackage/v/:packageName) */
export const label = `Hackage`;
/** URL for Hackage (/hackage/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/hackage/v/${packagename}`, options);