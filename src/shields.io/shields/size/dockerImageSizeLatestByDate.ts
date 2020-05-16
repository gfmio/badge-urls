// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Docker Image Size (latest by date) (/docker/image-size/:user/:repo?sort=date) */
export const label = `Docker Image Size (latest by date)`;
/** URL for Docker Image Size (latest by date) (/docker/image-size/:user/:repo?sort=date) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/docker/image-size/${user}/${repo}?sort=date`, options);