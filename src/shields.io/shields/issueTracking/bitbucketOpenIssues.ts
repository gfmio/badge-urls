// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bitbucket open issues (/bitbucket/issues-raw/:user/:repo) */
export const label = `Bitbucket open issues`;
/** URL for Bitbucket open issues (/bitbucket/issues-raw/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/bitbucket/issues-raw/${user}/${repo}`, options);