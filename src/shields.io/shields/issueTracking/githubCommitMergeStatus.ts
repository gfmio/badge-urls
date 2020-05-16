// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub commit merge status (/github/commit-status/:user/:repo/:branch/:commit) */
export const label = `GitHub commit merge status`;
/** URL for GitHub commit merge status (/github/commit-status/:user/:repo/:branch/:commit) */
export const url = (user: string, repo: string, branch: string, commit: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/commit-status/${user}/${repo}/${branch}/${commit}`, options);