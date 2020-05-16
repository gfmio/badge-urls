// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor Job (/appveyor/job/build/:user/:repo/:job) */
export const label = `AppVeyor Job`;
/** URL for AppVeyor Job (/appveyor/job/build/:user/:repo/:job) */
export const url = (user: string, repo: string, job: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/job/build/${user}/${repo}/${job}`, options);