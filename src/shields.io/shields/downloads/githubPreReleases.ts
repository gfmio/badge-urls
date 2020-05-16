// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Pre-Releases (/github/downloads-pre/:user/:repo/:tag/total) */
export const label = `GitHub Pre-Releases`;
/** URL for GitHub Pre-Releases (/github/downloads-pre/:user/:repo/:tag/total) */
export const url = (user: string, repo: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/downloads-pre/${user}/${repo}/${tag}/total`, options);