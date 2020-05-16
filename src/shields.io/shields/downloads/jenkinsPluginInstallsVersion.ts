// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Jenkins Plugin installs (version) (/jenkins/plugin/i/:plugin/:version) */
export const label = `Jenkins Plugin installs (version)`;
/** URL for Jenkins Plugin installs (version) (/jenkins/plugin/i/:plugin/:version) */
export const url = (plugin: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/jenkins/plugin/i/${plugin}/${version}`, options);