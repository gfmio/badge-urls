// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AUR version (/aur/version/:packageName) */
export const label = `AUR version`;
/** URL for AUR version (/aur/version/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/aur/version/${packagename}`, options);