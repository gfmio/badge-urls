// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Gitlab pipeline status (/gitlab/pipeline/:user/:repo) */
export const label = `Gitlab pipeline status`;
/** URL for Gitlab pipeline status (/gitlab/pipeline/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/gitlab/pipeline/${user}/${repo}`, options);