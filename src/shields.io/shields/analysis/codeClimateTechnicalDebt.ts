// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Code Climate technical debt (/codeclimate/tech-debt/:user/:repo) */
export const label = `Code Climate technical debt`;
/** URL for Code Climate technical debt (/codeclimate/tech-debt/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/codeclimate/tech-debt/${user}/${repo}`, options);