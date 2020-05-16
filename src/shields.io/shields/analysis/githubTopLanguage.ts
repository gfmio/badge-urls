// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub top language (/github/languages/top/:user/:repo) */
export const label = `GitHub top language`;
/** URL for GitHub top language (/github/languages/top/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/languages/top/${user}/${repo}`, options);