// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for CircleCI (/circleci/build/:vcsType/:user/:repo/:branch*?token=abc123def456) */
export const label = `CircleCI`;
/** URL for CircleCI (/circleci/build/:vcsType/:user/:repo/:branch*?token=abc123def456) */
export const url = (vcstype: string, user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/circleci/build/${vcstype}/${user}/${repo}/${branch}?token=abc123def456`, options);