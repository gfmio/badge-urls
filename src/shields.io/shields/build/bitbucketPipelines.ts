// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bitbucket Pipelines (/bitbucket/pipelines/:user/:repo) */
export const label = `Bitbucket Pipelines`;
/** URL for Bitbucket Pipelines (/bitbucket/pipelines/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/bitbucket/pipelines/${user}/${repo}`, options);