// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for TeamCity Simple Build Status (/teamcity/build/:verbosity/:buildId?server=https%3A%2F%2Fteamcity.jetbrains.com) */
export const label = `TeamCity Simple Build Status`;
/** URL for TeamCity Simple Build Status (/teamcity/build/:verbosity/:buildId?server=https%3A%2F%2Fteamcity.jetbrains.com) */
export const url = (verbosity: string, buildid: string, options?: ShieldsIOOptions) => urlWithOptions(`/teamcity/build/${verbosity}/${buildid}?server=https%3A%2F%2Fteamcity.jetbrains.com`, options);