// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Codacy branch grade (/codacy/grade/:projectId/:branch) */
export const label = `Codacy branch grade`;
/** URL for Codacy branch grade (/codacy/grade/:projectId/:branch) */
export const url = (projectid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/codacy/grade/${projectid}/${branch}`, options);