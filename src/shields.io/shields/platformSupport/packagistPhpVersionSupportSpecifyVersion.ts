// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist PHP Version Support (specify version) (/packagist/php-v/:user/:repo/:version) */
export const label = `Packagist PHP Version Support (specify version)`;
/** URL for Packagist PHP Version Support (specify version) (/packagist/php-v/:user/:repo/:version) */
export const url = (user: string, repo: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/php-v/${user}/${repo}/${version}`, options);