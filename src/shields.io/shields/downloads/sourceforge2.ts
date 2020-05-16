// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for SourceForge (/sourceforge/:interval/:project/:folder) */
export const label = `SourceForge`;
/** URL for SourceForge (/sourceforge/:interval/:project/:folder) */
export const url = (interval: string, project: string, folder: string, options?: ShieldsIOOptions) => urlWithOptions(`/sourceforge/${interval}/${project}/${folder}`, options);