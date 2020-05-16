// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Workflow Status (/github/workflow/status/:user/:repo/:workflow) */
export const label = `GitHub Workflow Status`;
/** URL for GitHub Workflow Status (/github/workflow/status/:user/:repo/:workflow) */
export const url = (user: string, repo: string, workflow: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/workflow/status/${user}/${repo}/${workflow}`, options);