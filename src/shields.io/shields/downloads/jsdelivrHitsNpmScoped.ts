// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for jsDelivr hits (npm scoped) (/jsdelivr/npm/:period/:scope?/:packageName) */
export const label = `jsDelivr hits (npm scoped)`;
/** URL for jsDelivr hits (npm scoped) (/jsdelivr/npm/:period/:scope?/:packageName) */
export const url = (period: string, scope: string, options?: ShieldsIOOptions) => urlWithOptions(`/jsdelivr/npm/${period}/${scope}?/:packageName`, options);