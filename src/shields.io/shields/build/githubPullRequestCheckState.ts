// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub pull request check state (/github/status/s/pulls/:user/:repo/:number) */
export const label = `GitHub pull request check state`;
/** URL for GitHub pull request check state (/github/status/s/pulls/:user/:repo/:number) */
export const url = (user: string, repo: string, number: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/status/s/pulls/${user}/${repo}/${number}`, options);