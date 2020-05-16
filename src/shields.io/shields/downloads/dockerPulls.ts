// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Pulls (/docker/pulls/:user/:repo) */
export const label = `Docker Pulls`;
/** URL for Docker Pulls (/docker/pulls/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/pulls/${user}/${repo}`, options);