// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Dependents (via libraries.io), scoped npm package (/librariesio/dependents/:platform/:scope/:packageName) */
export const label = `Dependents (via libraries.io), scoped npm package`;
/** URL for Dependents (via libraries.io), scoped npm package (/librariesio/dependents/:platform/:scope/:packageName) */
export const url = (platform: string, scope: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/dependents/${platform}/${scope}/${packagename}`, options);