// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub deployments (/github/deployments/:user/:repo/:environment) */
export const label = `GitHub deployments`;
/** URL for GitHub deployments (/github/deployments/:user/:repo/:environment) */
export const url = (user: string, repo: string, environment: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/deployments/${user}/${repo}/${environment}`, options);