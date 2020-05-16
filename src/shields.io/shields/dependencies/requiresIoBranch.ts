// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Requires.io (branch) (/requires/:service/:user/:repo/:branch) */
export const label = `Requires.io (branch)`;
/** URL for Requires.io (branch) (/requires/:service/:user/:repo/:branch) */
export const url = (service: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/requires/${service}/${user}/${repo}/${branch}`, options);