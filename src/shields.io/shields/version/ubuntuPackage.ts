// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Ubuntu package (/ubuntu/v/:packageName/:series?) */
export const label = `Ubuntu package`;
/** URL for Ubuntu package (/ubuntu/v/:packageName/:series?) */
export const url = (packagename: string, series: string, options?: ShieldsIOOptions) => urlWithOptions(`/ubuntu/v/${packagename}/${series}`, options);