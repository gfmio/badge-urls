// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm peer dependency version (/npm/dependency-version/:packageName/peer/:dependency) */
export const label = `npm peer dependency version`;
/** URL for npm peer dependency version (/npm/dependency-version/:packageName/peer/:dependency) */
export const url = (packagename: string, dependency: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/dependency-version/${packagename}/peer/${dependency}`, options);