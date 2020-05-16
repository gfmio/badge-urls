// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Version (/packagist/v/:user/:repo) */
export const label = `Packagist Version`;
/** URL for Packagist Version (/packagist/v/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/v/${user}/${repo}`, options);