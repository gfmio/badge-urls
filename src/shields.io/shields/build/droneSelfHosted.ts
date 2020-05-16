// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Drone (self-hosted) (/drone/build/:user/:repo?server=https%3A%2F%2Fdrone.shields.io) */
export const label = `Drone (self-hosted)`;
/** URL for Drone (self-hosted) (/drone/build/:user/:repo?server=https%3A%2F%2Fdrone.shields.io) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/drone/build/${user}/${repo}?server=https%3A%2F%2Fdrone.shields.io`, options);