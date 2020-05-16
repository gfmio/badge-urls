// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Gerrit change status (/gerrit/:changeId?baseUrl=https%3A%2F%2Fandroid-review.googlesource.com) */
export const label = `Gerrit change status`;
/** URL for Gerrit change status (/gerrit/:changeId?baseUrl=https%3A%2F%2Fandroid-review.googlesource.com) */
export const url = (changeid: string, options?: ShieldsIOOptions) => urlWithOptions(`/gerrit/${changeid}?baseUrl=https%3A%2F%2Fandroid-review.googlesource.com`, options);