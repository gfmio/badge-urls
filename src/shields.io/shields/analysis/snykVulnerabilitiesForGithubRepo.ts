// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Snyk Vulnerabilities for GitHub Repo (/snyk/vulnerabilities/github/:user/:repo) */
export const label = `Snyk Vulnerabilities for GitHub Repo`;
/** URL for Snyk Vulnerabilities for GitHub Repo (/snyk/vulnerabilities/github/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/snyk/vulnerabilities/github/${user}/${repo}`, options);