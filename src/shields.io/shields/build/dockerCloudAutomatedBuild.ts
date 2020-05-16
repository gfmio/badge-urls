// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Cloud Automated build (/docker/cloud/automated/:user/:repo) */
export const label = `Docker Cloud Automated build`;
/** URL for Docker Cloud Automated build (/docker/cloud/automated/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/cloud/automated/${user}/${repo}`, options);