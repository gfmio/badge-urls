// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Wercker Build branch (/wercker/build/:userName/:applicationName/:branch) */
export const label = `Wercker Build branch`;
/** URL for Wercker Build branch (/wercker/build/:userName/:applicationName/:branch) */
export const url = (username: string, applicationname: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/wercker/build/${username}/${applicationname}/${branch}`, options);