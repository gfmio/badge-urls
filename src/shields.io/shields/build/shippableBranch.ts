// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Shippable branch (/shippable/:projectId/:branch) */
export const label = `Shippable branch`;
/** URL for Shippable branch (/shippable/:projectId/:branch) */
export const url = (projectid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/shippable/${projectid}/${branch}`, options);