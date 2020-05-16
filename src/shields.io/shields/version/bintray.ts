// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Bintray (/bintray/v/:subject/:repo/:packageName) */
export const label = `Bintray`;
/** URL for Bintray (/bintray/v/:subject/:repo/:packageName) */
export const url = (subject: string, repo: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/bintray/v/${subject}/${repo}/${packagename}`, options);