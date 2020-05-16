// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Cloud Build Status (/docker/cloud/build/:user/:repo) */
export const label = `Docker Cloud Build Status`;
/** URL for Docker Cloud Build Status (/docker/cloud/build/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/cloud/build/${user}/${repo}`, options);