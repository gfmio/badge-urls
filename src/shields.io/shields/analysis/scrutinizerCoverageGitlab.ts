// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Scrutinizer coverage (GitLab) (/scrutinizer/quality/gl/:instance/:user/:repo/:branch?) */
export const label = `Scrutinizer coverage (GitLab)`;
/** URL for Scrutinizer coverage (GitLab) (/scrutinizer/quality/gl/:instance/:user/:repo/:branch?) */
export const url = (instance: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/scrutinizer/quality/gl/${instance}/${user}/${repo}/${branch}`, options);