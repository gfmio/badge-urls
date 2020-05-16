// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Codeship (branch) (/codeship/:projectId/:branch) */
export const label = `Codeship (branch)`;
/** URL for Codeship (branch) (/codeship/:projectId/:branch) */
export const url = (projectid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/codeship/${projectid}/${branch}`, options);