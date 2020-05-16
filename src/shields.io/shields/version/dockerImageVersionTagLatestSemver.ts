// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Image Version (tag latest semver) (/docker/v/:user/:repo/:tag) */
export const label = `Docker Image Version (tag latest semver)`;
/** URL for Docker Image Version (tag latest semver) (/docker/v/:user/:repo/:tag) */
export const url = (user: string, repo: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/v/${user}/${repo}/${tag}`, options);