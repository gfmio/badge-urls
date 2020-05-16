// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub watchers (/github/watchers/:user/:repo?label=Watch) */
export const label = `GitHub watchers`;
/** URL for GitHub watchers (/github/watchers/:user/:repo?label=Watch) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/watchers/${user}/${repo}?label=Watch`, options);