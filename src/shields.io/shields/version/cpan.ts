// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for CPAN (/cpan/v/:packageName) */
export const label = `CPAN`;
/** URL for CPAN (/cpan/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/cpan/v/${packagename}`, options);