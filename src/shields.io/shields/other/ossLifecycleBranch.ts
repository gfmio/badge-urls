// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for OSS Lifecycle (branch) (/osslifecycle/:user/:repo/:branch) */
export const label = `OSS Lifecycle (branch)`;
/** URL for OSS Lifecycle (branch) (/osslifecycle/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/osslifecycle/${user}/${repo}/${branch}`, options);