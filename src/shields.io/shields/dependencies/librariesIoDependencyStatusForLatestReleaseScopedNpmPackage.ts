// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Libraries.io dependency status for latest release, scoped npm package (/librariesio/release/:platform/:scope/:packageName) */
export const label = `Libraries.io dependency status for latest release, scoped npm package`;
/** URL for Libraries.io dependency status for latest release, scoped npm package (/librariesio/release/:platform/:scope/:packageName) */
export const url = (platform: string, scope: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/librariesio/release/${platform}/${scope}/${packagename}`, options);