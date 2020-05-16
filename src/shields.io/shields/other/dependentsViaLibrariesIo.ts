// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Dependents (via libraries.io) (/librariesio/dependents/:platform/:packageName) */
export const label = `Dependents (via libraries.io)`;
/** URL for Dependents (via libraries.io) (/librariesio/dependents/:platform/:packageName) */
export const url = (platform: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/dependents/${platform}/${packagename}`, options);