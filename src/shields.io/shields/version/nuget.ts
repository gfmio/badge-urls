// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Nuget (/nuget/v/:packageName) */
export const label = `Nuget`;
/** URL for Nuget (/nuget/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/nuget/v/${packagename}`, options);