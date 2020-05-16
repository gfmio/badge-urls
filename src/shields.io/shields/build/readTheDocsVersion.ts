// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Read the Docs (version) (/readthedocs/:packageName/:version) */
export const label = `Read the Docs (version)`;
/** URL for Read the Docs (version) (/readthedocs/:packageName/:version) */
export const url = (packagename: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/readthedocs/${packagename}/${version}`, options);