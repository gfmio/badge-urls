// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for DUB (latest) (/dub/:interval/:packageName/:version*) */
export const label = `DUB (latest)`;
/** URL for DUB (latest) (/dub/:interval/:packageName/:version*) */
export const url = (interval: string, packagename: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/dub/${interval}/${packagename}/${version}`, options);