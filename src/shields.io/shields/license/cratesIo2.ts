// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Crates.io (/crates/l/:crate/:version) */
export const label = `Crates.io`;
/** URL for Crates.io (/crates/l/:crate/:version) */
export const url = (crate: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/crates/l/${crate}/${version}`, options);