// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub commit activity (/github/commit-activity/:interval/:user/:repo) */
export const label = `GitHub commit activity`;
/** URL for GitHub commit activity (/github/commit-activity/:interval/:user/:repo) */
export const url = (interval: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/commit-activity/${interval}/${user}/${repo}`, options);