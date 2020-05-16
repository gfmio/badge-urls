// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub manifest version (/github/manifest-json/v/:user/:repo) */
export const label = `GitHub manifest version`;
/** URL for GitHub manifest version (/github/manifest-json/v/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/manifest-json/v/${user}/${repo}`, options);