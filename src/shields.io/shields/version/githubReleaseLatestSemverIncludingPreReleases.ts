// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub release (latest SemVer including pre-releases) (/github/v/release/:user/:repo?include_prereleases&sort=semver) */
export const label = `GitHub release (latest SemVer including pre-releases)`;
/** URL for GitHub release (latest SemVer including pre-releases) (/github/v/release/:user/:repo?include_prereleases&sort=semver) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/v/release/${user}/${repo}?include_prereleases&sort=semver`, options);