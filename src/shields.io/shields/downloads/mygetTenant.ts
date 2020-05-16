// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for MyGet tenant (/:tenant.myget/:feed/dt/:packageName) */
export const label = `MyGet tenant`;
/** URL for MyGet tenant (/:tenant.myget/:feed/dt/:packageName) */
export const url = (tenantMyget: string, feed: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/${tenantMyget}/${feed}/dt/${packagename}`, options);