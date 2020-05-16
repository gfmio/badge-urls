// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Dependent repos (via libraries.io), scoped npm package (/librariesio/dependent-repos/:platform/:scope/:packageName) */
export const label = `Dependent repos (via libraries.io), scoped npm package`;
/** URL for Dependent repos (via libraries.io), scoped npm package (/librariesio/dependent-repos/:platform/:scope/:packageName) */
export const url = (platform: string, scope: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/dependent-repos/${platform}/${scope}/${packagename}`, options);