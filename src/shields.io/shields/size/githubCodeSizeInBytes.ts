// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub code size in bytes (/github/languages/code-size/:user/:repo) */
export const label = `GitHub code size in bytes`;
/** URL for GitHub code size in bytes (/github/languages/code-size/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/languages/code-size/${user}/${repo}`, options);