// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Releases (by Asset) (/github/downloads/:user/:repo/:tag/:path) */
export const label = `GitHub Releases (by Asset)`;
/** URL for GitHub Releases (by Asset) (/github/downloads/:user/:repo/:tag/:path) */
export const url = (user: string, repo: string, tag: string, path: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/downloads/${user}/${repo}/${tag}/${path}`, options);