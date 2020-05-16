// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor (/appveyor/build/:user/:repo) */
export const label = `AppVeyor`;
/** URL for AppVeyor (/appveyor/build/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/build/${user}/${repo}`, options);