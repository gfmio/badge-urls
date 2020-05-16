// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub closed issues (/github/issues-closed-raw/:user/:repo) */
export const label = `GitHub closed issues`;
/** URL for GitHub closed issues (/github/issues-closed-raw/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/issues-closed-raw/${user}/${repo}`, options);