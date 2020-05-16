// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor branch (/appveyor/build/:user/:repo/:branch) */
export const label = `AppVeyor branch`;
/** URL for AppVeyor branch (/appveyor/build/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/build/${user}/${repo}/${branch}`, options);