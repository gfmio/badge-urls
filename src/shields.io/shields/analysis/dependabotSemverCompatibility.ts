// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Dependabot SemVer Compatibility (/dependabot/semver/:packageManager/:dependencyName) */
export const label = `Dependabot SemVer Compatibility`;
/** URL for Dependabot SemVer Compatibility (/dependabot/semver/:packageManager/:dependencyName) */
export const url = (packagemanager: string, dependencyname: string, options?: ShieldsIOOptions) => urlWithOptions(`/dependabot/semver/${packagemanager}/${dependencyname}`, options);