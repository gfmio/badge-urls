// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub pull requests (/github/issues-pr-raw/:user/:repo) */
export const label = `GitHub pull requests`;
/** URL for GitHub pull requests (/github/issues-pr-raw/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/issues-pr-raw/${user}/${repo}`, options);