// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for continuousphp (/continuousphp/:provider/:user/:repo/:branch) */
export const label = `continuousphp`;
/** URL for continuousphp (/continuousphp/:provider/:user/:repo/:branch) */
export const url = (provider: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/continuousphp/${provider}/${user}/${repo}/${branch}`, options);