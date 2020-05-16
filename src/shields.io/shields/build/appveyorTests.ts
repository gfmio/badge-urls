// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor tests (/appveyor/tests/:user/:repo) */
export const label = `AppVeyor tests`;
/** URL for AppVeyor tests (/appveyor/tests/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/tests/${user}/${repo}`, options);