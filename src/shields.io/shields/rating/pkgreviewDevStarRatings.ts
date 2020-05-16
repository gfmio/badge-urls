// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for pkgreview.dev Star Ratings (/pkgreview/stars/:pkgManager/:pkgSlug+) */
export const label = `pkgreview.dev Star Ratings`;
/** URL for pkgreview.dev Star Ratings (/pkgreview/stars/:pkgManager/:pkgSlug+) */
export const url = (pkgmanager: string, pkgslug: string, options?: ShieldsIOOptions) => urlWithOptions(`/pkgreview/stars/${pkgmanager}/${pkgslug}`, options);