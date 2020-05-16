// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub issues by-label (/github/issues-raw/:user/:repo/:label) */
export const label = `GitHub issues by-label`;
/** URL for GitHub issues by-label (/github/issues-raw/:user/:repo/:label) */
export const url = (user: string, repo: string, label: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/issues-raw/${user}/${repo}/${label}`, options);