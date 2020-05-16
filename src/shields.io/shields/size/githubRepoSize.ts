// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub repo size (/github/repo-size/:user/:repo) */
export const label = `GitHub repo size`;
/** URL for GitHub repo size (/github/repo-size/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/repo-size/${user}/${repo}`, options);