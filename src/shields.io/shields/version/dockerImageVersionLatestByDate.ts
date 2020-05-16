// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Image Version (latest by date) (/docker/v/:user/:repo?sort=date) */
export const label = `Docker Image Version (latest by date)`;
/** URL for Docker Image Version (latest by date) (/docker/v/:user/:repo?sort=date) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/v/${user}/${repo}?sort=date`, options);