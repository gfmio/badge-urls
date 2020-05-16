// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Conda (/conda/dn/:channel/:package) */
export const label = `Conda`;
/** URL for Conda (/conda/dn/:channel/:package) */
export const url = (channel: string, packageName: string, options?: ShieldsIOOptions) => urlWithOptions(`/conda/dn/${channel}/${packageName}`, options);