// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (prod) dependency version (/npm/dependency-version/:packageName/:dependency) */
export const label = `npm (prod) dependency version`;
/** URL for npm (prod) dependency version (/npm/dependency-version/:packageName/:dependency) */
export const url = (packagename: string, dependency: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/dependency-version/${packagename}/${dependency}`, options);