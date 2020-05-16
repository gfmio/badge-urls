// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub file size in bytes (/github/size/:user/:repo/:path*) */
export const label = `GitHub file size in bytes`;
/** URL for GitHub file size in bytes (/github/size/:user/:repo/:path*) */
export const url = (user: string, repo: string, path: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/size/${user}/${repo}/${path}`, options);