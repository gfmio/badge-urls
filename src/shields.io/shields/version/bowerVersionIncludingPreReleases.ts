// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bower Version (including pre-releases) (/bower/v/:packageName?include_prereleases) */
export const label = `Bower Version (including pre-releases)`;
/** URL for Bower Version (including pre-releases) (/bower/v/:packageName?include_prereleases) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/bower/v/${packagename}?include_prereleases`, options);