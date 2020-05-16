// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Drone (cloud) with branch (/drone/build/:user/:repo/:branch) */
export const label = `Drone (cloud) with branch`;
/** URL for Drone (cloud) with branch (/drone/build/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/drone/build/${user}/${repo}/${branch}`, options);