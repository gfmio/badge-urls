// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub commits since latest release (by date including pre-releases) (/github/commits-since/:user/:repo/:version/:branch*?include_prereleases) */
export const label = `GitHub commits since latest release (by date including pre-releases)`;
/** URL for GitHub commits since latest release (by date including pre-releases) (/github/commits-since/:user/:repo/:version/:branch*?include_prereleases) */
export const url = (user: string, repo: string, version: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/commits-since/${user}/${repo}/${version}/${branch}?include_prereleases`, options);