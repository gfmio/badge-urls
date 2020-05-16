// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Coverity Scan (/coverity/scan/:projectId) */
export const label = `Coverity Scan`;
/** URL for Coverity Scan (/coverity/scan/:projectId) */
export const url = (projectid: string, options?: ShieldsIOOptions) => urlWithOptions(`/coverity/scan/${projectid}`, options);