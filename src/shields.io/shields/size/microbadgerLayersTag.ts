// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for MicroBadger Layers (tag) (/microbadger/layers/:user/:repo/:tag) */
export const label = `MicroBadger Layers (tag)`;
/** URL for MicroBadger Layers (tag) (/microbadger/layers/:user/:repo/:tag) */
export const url = (user: string, repo: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/microbadger/layers/${user}/${repo}/${tag}`, options);