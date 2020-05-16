// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for MyGet (/myget/:feed/v/:packageName) */
export const label = `MyGet`;
/** URL for MyGet (/myget/:feed/v/:packageName) */
export const url = (feed: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/myget/${feed}/v/${packagename}`, options);