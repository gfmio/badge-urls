// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub package.json dynamic (/github/package-json/:key/:user/:repo/:branch) */
export const label = `GitHub package.json dynamic`;
/** URL for GitHub package.json dynamic (/github/package-json/:key/:user/:repo/:branch) */
export const url = (key: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/package-json/${key}/${user}/${repo}/${branch}`, options);