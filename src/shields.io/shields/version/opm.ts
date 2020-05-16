// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for OPM (/opm/v/:user/:moduleName) */
export const label = `OPM`;
/** URL for OPM (/opm/v/:user/:moduleName) */
export const url = (user: string, modulename: string, options?: ShieldsIOOptions) => urlWithOptions(`/opm/v/${user}/${modulename}`, options);