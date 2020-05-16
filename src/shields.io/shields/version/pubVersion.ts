// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Pub Version (/pub/v/:packageName) */
export const label = `Pub Version`;
/** URL for Pub Version (/pub/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pub/v/${packagename}`, options);