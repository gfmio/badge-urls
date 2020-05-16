// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Crates.io (/crates/v/:crate) */
export const label = `Crates.io`;
/** URL for Crates.io (/crates/v/:crate) */
export const url = (crate: string, options?: ShieldsIOOptions) => urlWithOptions(`/crates/v/${crate}`, options);