// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for GitHub contributors (/github/:variant/:user/:repo) */
export const label = `GitHub contributors`;
/** URL for GitHub contributors (/github/:variant/:user/:repo) */
export const url = (variant: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/github/${variant}/${user}/${repo}`, options);