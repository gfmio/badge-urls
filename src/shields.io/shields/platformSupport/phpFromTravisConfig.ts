// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PHP from Travis config (/travis/php-v/:user/:repo/:branch*) */
export const label = `PHP from Travis config`;
/** URL for PHP from Travis config (/travis/php-v/:user/:repo/:branch*) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/travis/php-v/${user}/${repo}/${branch}`, options);