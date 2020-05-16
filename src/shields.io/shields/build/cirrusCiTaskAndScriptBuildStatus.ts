// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Cirrus CI - Task and Script Build Status (/cirrus/github/:user/:repo?script=test&task=analyze) */
export const label = `Cirrus CI - Task and Script Build Status`;
/** URL for Cirrus CI - Task and Script Build Status (/cirrus/github/:user/:repo?script=test&task=analyze) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/cirrus/github/${user}/${repo}?script=test&task=analyze`, options);