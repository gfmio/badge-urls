// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub package.json dependency version (prod) (/github/package-json/dependency-version/:user/:repo/:packageName) */
export const label = `GitHub package.json dependency version (prod)`;
/** URL for GitHub package.json dependency version (prod) (/github/package-json/dependency-version/:user/:repo/:packageName) */
export const url = (user: string, repo: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/package-json/dependency-version/${user}/${repo}/${packagename}`, options);