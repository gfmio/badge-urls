// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub issue/pull request detail (/github/:issueKind/detail/:property/:user/:repo/:number) */
export const label = `GitHub issue/pull request detail`;
/** URL for GitHub issue/pull request detail (/github/:issueKind/detail/:property/:user/:repo/:number) */
export const url = (issuekind: string, property: string, user: string, repo: string, number: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/${issuekind}/detail/${property}/${user}/${repo}/${number}`, options);