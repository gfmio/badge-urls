// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Scrutinizer code quality (GitHub/Bitbucket) (/scrutinizer/quality/:vcs/:user/:repo/:branch?) */
export const label = `Scrutinizer code quality (GitHub/Bitbucket)`;
/** URL for Scrutinizer code quality (GitHub/Bitbucket) (/scrutinizer/quality/:vcs/:user/:repo/:branch?) */
export const url = (vcs: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/scrutinizer/quality/${vcs}/${user}/${repo}/${branch}`, options);