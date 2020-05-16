// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for JetBrains ReSharper plugins Version (including pre-releases) (/resharper/v/:packageName?include_prereleases) */
export const label = `JetBrains ReSharper plugins Version (including pre-releases)`;
/** URL for JetBrains ReSharper plugins Version (including pre-releases) (/resharper/v/:packageName?include_prereleases) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/resharper/v/${packagename}?include_prereleases`, options);