// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Matrix (/matrix/:roomAlias?server_fqdn=matrix.org) */
export const label = `Matrix`;
/** URL for Matrix (/matrix/:roomAlias?server_fqdn=matrix.org) */
export const url = (roomalias: string, options?: ShieldsIOOptions) => urlWithOptions(`/matrix/${roomalias}?server_fqdn=matrix.org`, options);