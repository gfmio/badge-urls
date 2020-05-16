// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Image Size (tag) (/docker/image-size/:user/:repo/:tag) */
export const label = `Docker Image Size (tag)`;
/** URL for Docker Image Size (tag) (/docker/image-size/:user/:repo/:tag) */
export const url = (user: string, repo: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/image-size/${user}/${repo}/${tag}`, options);