// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Downloads (/packagist/:interval/:user/:repo) */
export const label = `Packagist Downloads`;
/** URL for Packagist Downloads (/packagist/:interval/:user/:repo) */
export const url = (interval: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/${interval}/${user}/${repo}`, options);