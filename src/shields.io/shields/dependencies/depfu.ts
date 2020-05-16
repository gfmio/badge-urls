// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Depfu (/depfu/:user/:repo) */
export const label = `Depfu`;
/** URL for Depfu (/depfu/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/depfu/${user}/${repo}`, options);