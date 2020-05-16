// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for LGTM Grade (/lgtm/grade/:language/:host/:user/:repo) */
export const label = `LGTM Grade`;
/** URL for LGTM Grade (/lgtm/grade/:language/:host/:user/:repo) */
export const url = (language: string, host: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/lgtm/grade/${language}/${host}/${user}/${repo}`, options);