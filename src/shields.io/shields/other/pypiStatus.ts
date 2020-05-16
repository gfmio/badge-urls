// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PyPI - Status (/pypi/status/:packageName) */
export const label = `PyPI - Status`;
/** URL for PyPI - Status (/pypi/status/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pypi/status/${packagename}`, options);