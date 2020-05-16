// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Stars (/packagist/stars/:user/:repo) */
export const label = `Packagist Stars`;
/** URL for Packagist Stars (/packagist/stars/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/stars/${user}/${repo}`, options);