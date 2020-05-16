// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for AppVeyor tests with custom labels (/appveyor/tests/:user/:repo?failed_label=bad&passed_label=good&skipped_label=n%2Fa) */
export const label = `AppVeyor tests with custom labels`;
/** URL for AppVeyor tests with custom labels (/appveyor/tests/:user/:repo?failed_label=bad&passed_label=good&skipped_label=n%2Fa) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/appveyor/tests/${user}/${repo}?failed_label=bad&passed_label=good&skipped_label=n%2Fa`, options);