// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Travis (.com) (/travis/com/:user/:repo) */
export const label = `Travis (.com)`;
/** URL for Travis (.com) (/travis/com/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/travis/com/${user}/${repo}`, options);