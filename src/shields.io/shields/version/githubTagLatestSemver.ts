// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub tag (latest SemVer) (/github/v/tag/:user/:repo?sort=semver) */
export const label = `GitHub tag (latest SemVer)`;
/** URL for GitHub tag (latest SemVer) (/github/v/tag/:user/:repo?sort=semver) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/v/tag/${user}/${repo}?sort=semver`, options);