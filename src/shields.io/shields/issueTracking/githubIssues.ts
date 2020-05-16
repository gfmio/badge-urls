// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub issues (/github/issues/:user/:repo) */
export const label = `GitHub issues`;
/** URL for GitHub issues (/github/issues/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/issues/${user}/${repo}`, options);