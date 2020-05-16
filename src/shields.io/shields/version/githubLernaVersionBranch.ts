// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Github lerna version (branch) (/github/lerna-json/v/:user/:repo/:branch) */
export const label = `Github lerna version (branch)`;
/** URL for Github lerna version (branch) (/github/lerna-json/v/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/lerna-json/v/${user}/${repo}/${branch}`, options);