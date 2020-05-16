// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Libraries.io dependency status for specific release (/librariesio/release/:platform/:packageName/:version) */
export const label = `Libraries.io dependency status for specific release`;
/** URL for Libraries.io dependency status for specific release (/librariesio/release/:platform/:packageName/:version) */
export const url = (platform: string, packagename: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/release/${platform}/${packagename}/${version}`, options);