// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub forks (/github/forks/:user/:repo?label=Fork) */
export const label = `GitHub forks`;
/** URL for GitHub forks (/github/forks/:user/:repo?label=Fork) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/forks/${user}/${repo}?label=Fork`, options);