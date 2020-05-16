// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub (/github/license/:user/:repo) */
export const label = `GitHub`;
/** URL for GitHub (/github/license/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/license/${user}/${repo}`, options);