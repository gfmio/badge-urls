// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for MicroBadger Size (tag) (/microbadger/image-size/:user/:repo/:tag) */
export const label = `MicroBadger Size (tag)`;
/** URL for MicroBadger Size (tag) (/microbadger/image-size/:user/:repo/:tag) */
export const url = (user: string, repo: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/microbadger/image-size/${user}/${repo}/${tag}`, options);