// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Drone (self-hosted) with branch (/drone/build/:user/:repo/:branch?server=https%3A%2F%2Fdrone.shields.io) */
export const label = `Drone (self-hosted) with branch`;
/** URL for Drone (self-hosted) with branch (/drone/build/:user/:repo/:branch?server=https%3A%2F%2Fdrone.shields.io) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/drone/build/${user}/${repo}/${branch}?server=https%3A%2F%2Fdrone.shields.io`, options);