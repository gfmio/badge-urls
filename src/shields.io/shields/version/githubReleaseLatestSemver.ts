// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub release (latest SemVer) (/github/v/release/:user/:repo?sort=semver) */
export const label = `GitHub release (latest SemVer)`;
/** URL for GitHub release (latest SemVer) (/github/v/release/:user/:repo?sort=semver) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/v/release/${user}/${repo}?sort=semver`, options);