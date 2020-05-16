// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Downloads (custom server) (/packagist/:interval/:user/:repo?server=https%3A%2F%2Fpackagist.org) */
export const label = `Packagist Downloads (custom server)`;
/** URL for Packagist Downloads (custom server) (/packagist/:interval/:user/:repo?server=https%3A%2F%2Fpackagist.org) */
export const url = (interval: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/${interval}/${user}/${repo}?server=https%3A%2F%2Fpackagist.org`, options);