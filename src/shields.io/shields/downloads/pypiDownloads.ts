// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PyPI - Downloads (/pypi/:period/:packageName) */
export const label = `PyPI - Downloads`;
/** URL for PyPI - Downloads (/pypi/:period/:packageName) */
export const url = (period: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/pypi/${period}/${packagename}`, options);