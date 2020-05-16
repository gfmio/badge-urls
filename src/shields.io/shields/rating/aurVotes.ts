// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AUR votes (/aur/votes/:packageName) */
export const label = `AUR votes`;
/** URL for AUR votes (/aur/votes/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/aur/votes/${packagename}`, options);