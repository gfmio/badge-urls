// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Crates.io (version) (/crates/dv/:crate/:version) */
export const label = `Crates.io (version)`;
/** URL for Crates.io (version) (/crates/dv/:crate/:version) */
export const url = (crate: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/crates/dv/${crate}/${version}`, options);