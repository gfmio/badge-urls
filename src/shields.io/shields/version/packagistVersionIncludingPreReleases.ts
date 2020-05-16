// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Version (including pre-releases) (/packagist/v/:user/:repo?include_prereleases) */
export const label = `Packagist Version (including pre-releases)`;
/** URL for Packagist Version (including pre-releases) (/packagist/v/:user/:repo?include_prereleases) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/v/${user}/${repo}?include_prereleases`, options);