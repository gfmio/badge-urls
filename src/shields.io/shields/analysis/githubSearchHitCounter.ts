// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub search hit counter (/github/search/:user/:repo/:query) */
export const label = `GitHub search hit counter`;
/** URL for GitHub search hit counter (/github/search/:user/:repo/:query) */
export const url = (user: string, repo: string, query: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/search/${user}/${repo}/${query}`, options);