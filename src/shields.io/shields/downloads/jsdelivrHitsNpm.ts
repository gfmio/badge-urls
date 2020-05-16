// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for jsDelivr hits (npm) (/jsdelivr/npm/:period/:packageName) */
export const label = `jsDelivr hits (npm)`;
/** URL for jsDelivr hits (npm) (/jsdelivr/npm/:period/:packageName) */
export const url = (period: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/jsdelivr/npm/${period}/${packagename}`, options);