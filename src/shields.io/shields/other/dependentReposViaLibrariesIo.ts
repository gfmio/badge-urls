// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Dependent repos (via libraries.io) (/librariesio/dependent-repos/:platform/:packageName) */
export const label = `Dependent repos (via libraries.io)`;
/** URL for Dependent repos (via libraries.io) (/librariesio/dependent-repos/:platform/:packageName) */
export const url = (platform: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/dependent-repos/${platform}/${packagename}`, options);