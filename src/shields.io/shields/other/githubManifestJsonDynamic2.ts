// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub manifest.json dynamic (/github/manifest-json/:key/:user/:repo/:branch) */
export const label = `GitHub manifest.json dynamic`;
/** URL for GitHub manifest.json dynamic (/github/manifest-json/:key/:user/:repo/:branch) */
export const url = (key: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/manifest-json/${key}/${user}/${repo}/${branch}`, options);