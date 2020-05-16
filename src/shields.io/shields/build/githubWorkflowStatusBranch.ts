// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Workflow Status (branch) (/github/workflow/status/:user/:repo/:workflow/:branch) */
export const label = `GitHub Workflow Status (branch)`;
/** URL for GitHub Workflow Status (branch) (/github/workflow/status/:user/:repo/:workflow/:branch) */
export const url = (user: string, repo: string, workflow: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/workflow/status/${user}/${repo}/${workflow}/${branch}`, options);