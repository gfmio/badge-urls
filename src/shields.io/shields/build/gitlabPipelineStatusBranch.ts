// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Gitlab pipeline status (branch) (/gitlab/pipeline/:user/:repo/:branch) */
export const label = `Gitlab pipeline status (branch)`;
/** URL for Gitlab pipeline status (branch) (/gitlab/pipeline/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/gitlab/pipeline/${user}/${repo}/${branch}`, options);