// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for node-current (tag) (/node/v/:packageName/:tag) */
export const label = `node-current (tag)`;
/** URL for node-current (tag) (/node/v/:packageName/:tag) */
export const url = (packagename: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/node/v/${packagename}/${tag}`, options);