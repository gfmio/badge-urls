// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Wercker Build (/wercker/build/:userName/:applicationName) */
export const label = `Wercker Build`;
/** URL for Wercker Build (/wercker/build/:userName/:applicationName) */
export const url = (username: string, applicationname: string, options?: ShieldsIOOptions) => urlWithOptions(`/wercker/build/${username}/${applicationname}`, options);