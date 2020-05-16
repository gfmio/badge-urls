// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor tests (branch) (/appveyor/tests/:user/:repo/:branch) */
export const label = `AppVeyor tests (branch)`;
/** URL for AppVeyor tests (branch) (/appveyor/tests/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/tests/${user}/${repo}/${branch}`, options);