// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub stars (/github/stars/:user/:repo?style=social) */
export const label = `GitHub stars`;
/** URL for GitHub stars (/github/stars/:user/:repo?style=social) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/stars/${user}/${repo}?style=social`, options);