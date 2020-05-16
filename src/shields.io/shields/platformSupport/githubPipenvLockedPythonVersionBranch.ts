// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub Pipenv locked Python version (branch) (/github/pipenv/locked/python-version/:user/:repo/:branch) */
export const label = `GitHub Pipenv locked Python version (branch)`;
/** URL for GitHub Pipenv locked Python version (branch) (/github/pipenv/locked/python-version/:user/:repo/:branch) */
export const url = (user: string, repo: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/pipenv/locked/python-version/${user}/${repo}/${branch}`, options);