// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Build Status (/docker/build/:user/:repo) */
export const label = `Docker Build Status`;
/** URL for Docker Build Status (/docker/build/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/build/${user}/${repo}`, options);