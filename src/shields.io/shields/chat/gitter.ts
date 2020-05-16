// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Gitter (/gitter/room/:user/:repo) */
export const label = `Gitter`;
/** URL for Gitter (/gitter/room/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/gitter/room/${user}/${repo}`, options);