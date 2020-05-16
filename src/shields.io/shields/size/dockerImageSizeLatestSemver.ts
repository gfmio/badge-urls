// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Image Size (latest semver) (/docker/image-size/:user/:repo?sort=semver) */
export const label = `Docker Image Size (latest semver)`;
/** URL for Docker Image Size (latest semver) (/docker/image-size/:user/:repo?sort=semver) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/image-size/${user}/${repo}?sort=semver`, options);