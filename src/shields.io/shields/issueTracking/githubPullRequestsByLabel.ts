// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub pull requests by-label (/github/issues-pr/:user/:repo/:label) */
export const label = `GitHub pull requests by-label`;
/** URL for GitHub pull requests by-label (/github/issues-pr/:user/:repo/:label) */
export const url = (user: string, repo: string, label: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/issues-pr/${user}/${repo}/${label}`, options);