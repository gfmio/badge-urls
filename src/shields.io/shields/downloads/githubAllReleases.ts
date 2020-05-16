// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub All Releases (/github/downloads/:user/:repo/total) */
export const label = `GitHub All Releases`;
/** URL for GitHub All Releases (/github/downloads/:user/:repo/total) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/downloads/${user}/${repo}/total`, options);