// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Debian package (/debian/v/:packageName/:distribution?) */
export const label = `Debian package`;
/** URL for Debian package (/debian/v/:packageName/:distribution?) */
export const url = (packagename: string, distribution: string, options?: ShieldsIOOptions) => urlWithOptions(`/debian/v/${packagename}/${distribution}`, options);