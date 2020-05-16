// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Nuget (with prereleases) (/nuget/vpre/:packageName) */
export const label = `Nuget (with prereleases)`;
/** URL for Nuget (with prereleases) (/nuget/vpre/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/nuget/vpre/${packagename}`, options);