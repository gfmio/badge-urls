// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm peer dependency version (scoped) (/npm/dependency-version/:scope?/:packageName/dev/:dependencyScope?/:dependency) */
export const label = `npm peer dependency version (scoped)`;
/** URL for npm peer dependency version (scoped) (/npm/dependency-version/:scope?/:packageName/dev/:dependencyScope?/:dependency) */
export const url = (scope: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/dependency-version/${scope}?/:packageName/dev/:dependencyScope`, options);