// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Clojars Version (including pre-releases) (/clojars/v/:clojar+?include_prereleases) */
export const label = `Clojars Version (including pre-releases)`;
/** URL for Clojars Version (including pre-releases) (/clojars/v/:clojar+?include_prereleases) */
export const url = (clojar: string, options?: ShieldsIOOptions) => urlWithOptions(`/clojars/v/${clojar}?include_prereleases`, options);