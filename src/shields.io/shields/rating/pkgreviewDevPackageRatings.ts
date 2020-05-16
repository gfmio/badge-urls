// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for pkgreview.dev Package Ratings (/pkgreview/rating/:pkgManager/:pkgSlug+) */
export const label = `pkgreview.dev Package Ratings`;
/** URL for pkgreview.dev Package Ratings (/pkgreview/rating/:pkgManager/:pkgSlug+) */
export const url = (pkgmanager: string, pkgslug: string, options?: ShieldsIOOptions) => urlWithOptions(`/pkgreview/rating/${pkgmanager}/${pkgslug}`, options);