// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Travis (.org) (/travis/:user/:repo) */
export const label = `Travis (.org)`;
/** URL for Travis (.org) (/travis/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/travis/${user}/${repo}`, options);