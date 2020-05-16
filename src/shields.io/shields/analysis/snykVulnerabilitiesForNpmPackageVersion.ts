// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Snyk Vulnerabilities for npm package version (/snyk/vulnerabilities/npm/:packageName) */
export const label = `Snyk Vulnerabilities for npm package version`;
/** URL for Snyk Vulnerabilities for npm package version (/snyk/vulnerabilities/npm/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/snyk/vulnerabilities/npm/${packagename}`, options);