// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Fedora package (/fedora/v/:packageName/:branch?) */
export const label = `Fedora package`;
/** URL for Fedora package (/fedora/v/:packageName/:branch?) */
export const url = (packagename: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/fedora/v/${packagename}/${branch}`, options);