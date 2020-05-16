// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PyPI - Python Version (/pypi/pyversions/:packageName) */
export const label = `PyPI - Python Version`;
/** URL for PyPI - Python Version (/pypi/pyversions/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pypi/pyversions/${packagename}`, options);