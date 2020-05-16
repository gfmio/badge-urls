// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub milestones (/github/milestones/:variant/:user/:repo) */
export const label = `GitHub milestones`;
/** URL for GitHub milestones (/github/milestones/:variant/:user/:repo) */
export const url = (variant: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/milestones/${variant}/${user}/${repo}`, options);