// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub last commit (/github/last-commit/:user/:repo) */
export const label = `GitHub last commit`;
/** URL for GitHub last commit (/github/last-commit/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/last-commit/${user}/${repo}`, options);