// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub language count (/github/languages/count/:user/:repo) */
export const label = `GitHub language count`;
/** URL for GitHub language count (/github/languages/count/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/languages/count/${user}/${repo}`, options);