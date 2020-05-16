// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Twitter Follow (/twitter/follow/:user?label=Follow) */
export const label = `Twitter Follow`;
/** URL for Twitter Follow (/twitter/follow/:user?label=Follow) */
export const url = (user: string, options?: ShieldsIOOptions) => urlWithOptions(`/twitter/follow/${user}?label=Follow`, options);