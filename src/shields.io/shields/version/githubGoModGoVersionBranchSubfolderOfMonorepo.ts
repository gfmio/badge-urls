// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub go.mod Go version (branch & subfolder of monorepo) (/github/go-mod/go-version/:user/:repo/:branch?filename=src%2Fgo.mod) */
export const label = `GitHub go.mod Go version (branch & subfolder of monorepo)`;
/** URL for GitHub go.mod Go version (branch & subfolder of monorepo) (/github/go-mod/go-version/:user/:repo/:branch?filename=src%2Fgo.mod) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/go-mod/go-version/${user}/${repo}/${branch}?filename=src%2Fgo.mod`, options);