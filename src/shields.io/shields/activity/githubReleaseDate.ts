// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Release Date (/github/release-date/:user/:repo) */
export const label = `GitHub Release Date`;
/** URL for GitHub Release Date (/github/release-date/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/release-date/${user}/${repo}`, options);