// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bugzilla bug status (non-Mozilla) (/bugzilla/:bugNumber?baseUrl=https%3A%2F%2Fbugs.eclipse.org%2Fbugs) */
export const label = `Bugzilla bug status (non-Mozilla)`;
/** URL for Bugzilla bug status (non-Mozilla) (/bugzilla/:bugNumber?baseUrl=https%3A%2F%2Fbugs.eclipse.org%2Fbugs) */
export const url = (bugnumber: string, options?: ShieldsIOOptions) => urlWithOptions(`/bugzilla/${bugnumber}?baseUrl=https%3A%2F%2Fbugs.eclipse.org%2Fbugs`, options);