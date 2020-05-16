// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PowerShell Gallery Version (/powershellgallery/v/:packageName) */
export const label = `PowerShell Gallery Version`;
/** URL for PowerShell Gallery Version (/powershellgallery/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/powershellgallery/v/${packagename}`, options);