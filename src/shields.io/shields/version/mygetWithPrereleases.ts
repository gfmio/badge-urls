// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for MyGet (with prereleases) (/myget/:feed/vpre/:packageName) */
export const label = `MyGet (with prereleases)`;
/** URL for MyGet (with prereleases) (/myget/:feed/vpre/:packageName) */
export const url = (feed: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/myget/${feed}/vpre/${packagename}`, options);