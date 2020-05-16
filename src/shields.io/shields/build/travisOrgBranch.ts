// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Travis (.org) branch (/travis/:user/:repo/:branch) */
export const label = `Travis (.org) branch`;
/** URL for Travis (.org) branch (/travis/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/travis/${user}/${repo}/${branch}`, options);