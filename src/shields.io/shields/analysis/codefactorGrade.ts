// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for CodeFactor Grade (/codefactor/grade/:vcsType/:user/:repo/:branch*) */
export const label = `CodeFactor Grade`;
/** URL for CodeFactor Grade (/codefactor/grade/:vcsType/:user/:repo/:branch*) */
export const url = (vcstype: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/codefactor/grade/${vcstype}/${user}/${repo}/${branch}`, options);