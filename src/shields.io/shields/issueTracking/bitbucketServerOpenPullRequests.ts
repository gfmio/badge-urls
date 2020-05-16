// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bitbucket Server open pull requests (/bitbucket/pr-raw/:user/:repo?server=https%3A%2F%2Fbitbucket.mydomain.net) */
export const label = `Bitbucket Server open pull requests`;
/** URL for Bitbucket Server open pull requests (/bitbucket/pr-raw/:user/:repo?server=https%3A%2F%2Fbitbucket.mydomain.net) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/bitbucket/pr-raw/${user}/${repo}?server=https%3A%2F%2Fbitbucket.mydomain.net`, options);