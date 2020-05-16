// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor Job branch (/appveyor/job/build/:user/:repo/:job/:branch) */
export const label = `AppVeyor Job branch`;
/** URL for AppVeyor Job branch (/appveyor/job/build/:user/:repo/:job/:branch) */
export const url = (user: string, repo: string, job: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/job/build/${user}/${repo}/${job}/${branch}`, options);