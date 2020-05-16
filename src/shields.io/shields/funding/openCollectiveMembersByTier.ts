// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Open Collective members by tier (/opencollective/tier/:collective/:tierId) */
export const label = `Open Collective members by tier`;
/** URL for Open Collective members by tier (/opencollective/tier/:collective/:tierId) */
export const url = (collective: string, tierid: string, options?: ShieldsIOOptions) => urlWithOptions(`/opencollective/tier/${collective}/${tierid}`, options);