// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Pub Version (including pre-releases) (/pub/v/:packageName?include_prereleases) */
export const label = `Pub Version (including pre-releases)`;
/** URL for Pub Version (including pre-releases) (/pub/v/:packageName?include_prereleases) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pub/v/${packagename}?include_prereleases`, options);