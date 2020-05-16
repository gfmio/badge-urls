// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor tests (compact) (/appveyor/tests/:user/:repo?compact_message) */
export const label = `AppVeyor tests (compact)`;
/** URL for AppVeyor tests (compact) (/appveyor/tests/:user/:repo?compact_message) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/tests/${user}/${repo}?compact_message`, options);