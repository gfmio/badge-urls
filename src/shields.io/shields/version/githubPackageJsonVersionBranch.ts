// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub package.json version (branch) (/github/package-json/v/:user/:repo/:branch) */
export const label = `GitHub package.json version (branch)`;
/** URL for GitHub package.json version (branch) (/github/package-json/v/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/package-json/v/${user}/${repo}/${branch}`, options);