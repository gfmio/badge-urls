// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Chocolatey Version (including pre-releases) (/chocolatey/v/:packageName?include_prereleases) */
export const label = `Chocolatey Version (including pre-releases)`;
/** URL for Chocolatey Version (including pre-releases) (/chocolatey/v/:packageName?include_prereleases) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/chocolatey/v/${packagename}?include_prereleases`, options);