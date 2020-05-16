// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Buildkite (branch) (/buildkite/:identifier/:branch) */
export const label = `Buildkite (branch)`;
/** URL for Buildkite (branch) (/buildkite/:identifier/:branch) */
export const url = (identifier: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/buildkite/${identifier}/${branch}`, options);