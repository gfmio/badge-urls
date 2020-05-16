// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Automated build (/docker/automated/:user/:repo) */
export const label = `Docker Automated build`;
/** URL for Docker Automated build (/docker/automated/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/automated/${user}/${repo}`, options);