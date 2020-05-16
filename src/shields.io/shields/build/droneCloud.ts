// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Drone (cloud) (/drone/build/:user/:repo) */
export const label = `Drone (cloud)`;
/** URL for Drone (cloud) (/drone/build/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/drone/build/${user}/${repo}`, options);