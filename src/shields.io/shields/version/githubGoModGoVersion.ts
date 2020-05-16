// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub go.mod Go version (/github/go-mod/go-version/:user/:repo) */
export const label = `GitHub go.mod Go version`;
/** URL for GitHub go.mod Go version (/github/go-mod/go-version/:user/:repo) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/go-mod/go-version/${user}/${repo}`, options);