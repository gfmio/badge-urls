// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for jsDelivr hits (GitHub) (/jsdelivr/gh/:period/:user/:repo) */
export const label = `jsDelivr hits (GitHub)`;
/** URL for jsDelivr hits (GitHub) (/jsdelivr/gh/:period/:user/:repo) */
export const url = (period: string, user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/jsdelivr/gh/${period}/${user}/${repo}`, options);