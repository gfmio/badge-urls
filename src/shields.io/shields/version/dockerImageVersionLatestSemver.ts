// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Image Version (latest semver) (/docker/v/:user/:repo?sort=semver) */
export const label = `Docker Image Version (latest semver)`;
/** URL for Docker Image Version (latest semver) (/docker/v/:user/:repo?sort=semver) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/v/${user}/${repo}?sort=semver`, options);