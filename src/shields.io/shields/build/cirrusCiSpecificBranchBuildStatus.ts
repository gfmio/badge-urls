// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Cirrus CI - Specific Branch Build Status (/cirrus/github/:user/:repo/:branch?script=test&task=analyze) */
export const label = `Cirrus CI - Specific Branch Build Status`;
/** URL for Cirrus CI - Specific Branch Build Status (/cirrus/github/:user/:repo/:branch?script=test&task=analyze) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/cirrus/github/${user}/${repo}/${branch}?script=test&task=analyze`, options);