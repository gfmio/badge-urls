// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Pipenv locked dependency version (/github/pipenv/locked/dependency-version/:user/:repo/:kind?/:packageName) */
export const label = `GitHub Pipenv locked dependency version`;
/** URL for GitHub Pipenv locked dependency version (/github/pipenv/locked/dependency-version/:user/:repo/:kind?/:packageName) */
export const url = (user: string, repo: string, kind: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/pipenv/locked/dependency-version/${user}/${repo}/${kind}?/:packageName`, options);