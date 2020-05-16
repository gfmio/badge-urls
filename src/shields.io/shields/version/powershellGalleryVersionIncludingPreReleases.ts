// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PowerShell Gallery Version (including pre-releases) (/powershellgallery/v/:packageName?include_prereleases) */
export const label = `PowerShell Gallery Version (including pre-releases)`;
/** URL for PowerShell Gallery Version (including pre-releases) (/powershellgallery/v/:packageName?include_prereleases) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/powershellgallery/v/${packagename}?include_prereleases`, options);