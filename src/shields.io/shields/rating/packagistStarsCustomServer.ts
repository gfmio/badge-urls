// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Stars (custom server) (/packagist/stars/:user/:repo?server=https%3A%2F%2Fpackagist.org) */
export const label = `Packagist Stars (custom server)`;
/** URL for Packagist Stars (custom server) (/packagist/stars/:user/:repo?server=https%3A%2F%2Fpackagist.org) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/stars/${user}/${repo}?server=https%3A%2F%2Fpackagist.org`, options);