// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PyPI (/pypi/v/:packageName) */
export const label = `PyPI`;
/** URL for PyPI (/pypi/v/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pypi/v/${packagename}`, options);