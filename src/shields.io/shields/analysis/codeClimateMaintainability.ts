// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Code Climate maintainability (/codeclimate/:format/:user/:repo) */
export const label = `Code Climate maintainability`;
/** URL for Code Climate maintainability (/codeclimate/:format/:user/:repo) */
export const url = (format: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/codeclimate/${format}/${user}/${repo}`, options);