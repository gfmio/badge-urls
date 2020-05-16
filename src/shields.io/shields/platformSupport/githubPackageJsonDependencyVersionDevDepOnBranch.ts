// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub package.json dependency version (dev dep on branch) (/github/package-json/dependency-version/:user/:repo/dev/:scope?/:packageName/:branch*) */
export const label = `GitHub package.json dependency version (dev dep on branch)`;
/** URL for GitHub package.json dependency version (dev dep on branch) (/github/package-json/dependency-version/:user/:repo/dev/:scope?/:packageName/:branch*) */
export const url = (user: string, repo: string, scope: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/package-json/dependency-version/${user}/${repo}/dev/${scope}?/:packageName/:branch*`, options);