// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub tag (latest by date) (/github/v/tag/:user/:repo) */
export const label = `GitHub tag (latest by date)`;
/** URL for GitHub tag (latest by date) (/github/v/tag/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/v/tag/${user}/${repo}`, options);