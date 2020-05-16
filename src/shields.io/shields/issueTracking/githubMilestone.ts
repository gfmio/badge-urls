// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub milestone (/github/milestones/:variant/:user/:repo/:number) */
export const label = `GitHub milestone`;
/** URL for GitHub milestone (/github/milestones/:variant/:user/:repo/:number) */
export const url = (variant: string, user: string, repo: string, number: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/milestones/${variant}/${user}/${repo}/${number}`, options);