// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub followers (/github/followers/:user?label=Follow) */
export const label = `GitHub followers`;
/** URL for GitHub followers (/github/followers/:user?label=Follow) */
export const url = (user: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/followers/${user}?label=Follow`, options);