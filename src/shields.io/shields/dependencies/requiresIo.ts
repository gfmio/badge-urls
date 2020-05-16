// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Requires.io (/requires/:service/:user/:repo) */
export const label = `Requires.io`;
/** URL for Requires.io (/requires/:service/:user/:repo) */
export const url = (service: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/requires/${service}/${user}/${repo}`, options);