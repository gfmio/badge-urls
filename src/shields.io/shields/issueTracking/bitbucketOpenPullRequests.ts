// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bitbucket open pull requests (/bitbucket/pr-raw/:user/:repo) */
export const label = `Bitbucket open pull requests`;
/** URL for Bitbucket open pull requests (/bitbucket/pr-raw/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/bitbucket/pr-raw/${user}/${repo}`, options);