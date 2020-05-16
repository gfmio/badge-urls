// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for LGTM Alerts (/lgtm/alerts/:host/:user/:repo) */
export const label = `LGTM Alerts`;
/** URL for LGTM Alerts (/lgtm/alerts/:host/:user/:repo) */
export const url = (host: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/lgtm/alerts/${host}/${user}/${repo}`, options);