// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm dev dependency version (/npm/dependency-version/:packageName/dev/:dependency) */
export const label = `npm dev dependency version`;
/** URL for npm dev dependency version (/npm/dependency-version/:packageName/dev/:dependency) */
export const url = (packagename: string, dependency: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/dependency-version/${packagename}/dev/${dependency}`, options);