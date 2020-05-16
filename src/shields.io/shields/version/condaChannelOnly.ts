// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Conda (channel only) (/conda/vn/:channel/:package) */
export const label = `Conda (channel only)`;
/** URL for Conda (channel only) (/conda/vn/:channel/:package) */
export const url = (channel: string, packageName: string, options?: ShieldsIOOptions) => urlWithOptions(`/conda/vn/${channel}/${packageName}`, options);