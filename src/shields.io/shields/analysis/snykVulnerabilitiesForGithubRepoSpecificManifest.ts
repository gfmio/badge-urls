// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Snyk Vulnerabilities for GitHub Repo (Specific Manifest) (/snyk/vulnerabilities/github/:user/:repo/:manifestFilePath) */
export const label = `Snyk Vulnerabilities for GitHub Repo (Specific Manifest)`;
/** URL for Snyk Vulnerabilities for GitHub Repo (Specific Manifest) (/snyk/vulnerabilities/github/:user/:repo/:manifestFilePath) */
export const url = (user: string, repo: string, manifestfilepath: string, options?: ShieldsIOOptions) => urlWithOptions(`/snyk/vulnerabilities/github/${user}/${repo}/${manifestfilepath}`, options);