// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Libraries.io dependency status for latest release (/librariesio/release/:platform/:packageName) */
export const label = `Libraries.io dependency status for latest release`;
/** URL for Libraries.io dependency status for latest release (/librariesio/release/:platform/:packageName) */
export const url = (platform: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/release/${platform}/${packagename}`, options);