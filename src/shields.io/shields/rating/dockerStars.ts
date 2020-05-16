// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Stars (/docker/stars/:user/:repo) */
export const label = `Docker Stars`;
/** URL for Docker Stars (/docker/stars/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/stars/${user}/${repo}`, options);