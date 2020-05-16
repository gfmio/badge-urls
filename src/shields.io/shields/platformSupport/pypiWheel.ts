// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PyPI - Wheel (/pypi/wheel/:packageName) */
export const label = `PyPI - Wheel`;
/** URL for PyPI - Wheel (/pypi/wheel/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pypi/wheel/${packagename}`, options);