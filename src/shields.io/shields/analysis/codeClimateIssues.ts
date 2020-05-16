// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Code Climate issues (/codeclimate/issues/:user/:repo) */
export const label = `Code Climate issues`;
/** URL for Code Climate issues (/codeclimate/issues/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/codeclimate/issues/${user}/${repo}`, options);