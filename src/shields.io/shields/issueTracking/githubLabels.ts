// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub labels (/github/labels/:user/:repo/:name) */
export const label = `GitHub labels`;
/** URL for GitHub labels (/github/labels/:user/:repo/:name) */
export const url = (user: string, repo: string, name: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/labels/${user}/${repo}/${name}`, options);