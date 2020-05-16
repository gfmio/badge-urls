// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bugzilla bug status (Mozilla) (/bugzilla/:bugNumber) */
export const label = `Bugzilla bug status (Mozilla)`;
/** URL for Bugzilla bug status (Mozilla) (/bugzilla/:bugNumber) */
export const url = (bugnumber: string, options?: ShieldsIOOptions) => urlWithOptions(`/bugzilla/${bugnumber}`, options);