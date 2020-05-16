// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Travis (.com) branch (/travis/com/:user/:repo/:branch) */
export const label = `Travis (.com) branch`;
/** URL for Travis (.com) branch (/travis/com/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/travis/com/${user}/${repo}/${branch}`, options);