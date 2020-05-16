// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub release (latest by date including pre-releases) (/github/v/release/:user/:repo?include_prereleases) */
export const label = `GitHub release (latest by date including pre-releases)`;
/** URL for GitHub release (latest by date including pre-releases) (/github/v/release/:user/:repo?include_prereleases) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/v/release/${user}/${repo}?include_prereleases`, options);