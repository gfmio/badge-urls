// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for SourceForge (/sourceforge/:interval/:project) */
export const label = `SourceForge`;
/** URL for SourceForge (/sourceforge/:interval/:project) */
export const url = (interval: string, project: string, options?: ShieldsIOOptions) => urlWithOptions(`/sourceforge/${interval}/${project}`, options);