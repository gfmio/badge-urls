// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Chocolatey Version (/chocolatey/v/:packageName) */
export const label = `Chocolatey Version`;
/** URL for Chocolatey Version (/chocolatey/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/chocolatey/v/${packagename}`, options);