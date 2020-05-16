// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub package.json version (/github/package-json/v/:user/:repo) */
export const label = `GitHub package.json version`;
/** URL for GitHub package.json version (/github/package-json/v/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/package-json/v/${user}/${repo}`, options);