// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for JitPack (/jitpack/v/:vcs/:user/:repo) */
export const label = `JitPack`;
/** URL for JitPack (/jitpack/v/:vcs/:user/:repo) */
export const url = (vcs: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/jitpack/v/${vcs}/${user}/${repo}`, options);