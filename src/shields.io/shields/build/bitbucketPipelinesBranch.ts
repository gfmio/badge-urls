// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bitbucket Pipelines branch (/bitbucket/pipelines/:user/:repo/:branch) */
export const label = `Bitbucket Pipelines branch`;
/** URL for Bitbucket Pipelines branch (/bitbucket/pipelines/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/bitbucket/pipelines/${user}/${repo}/${branch}`, options);