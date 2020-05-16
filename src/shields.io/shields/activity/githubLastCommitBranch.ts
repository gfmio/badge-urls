// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub last commit (branch) (/github/last-commit/:user/:repo/:branch) */
export const label = `GitHub last commit (branch)`;
/** URL for GitHub last commit (branch) (/github/last-commit/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/last-commit/${user}/${repo}/${branch}`, options);