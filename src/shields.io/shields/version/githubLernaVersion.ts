// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Github lerna version (/github/lerna-json/v/:user/:repo) */
export const label = `Github lerna version`;
/** URL for Github lerna version (/github/lerna-json/v/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/lerna-json/v/${user}/${repo}`, options);