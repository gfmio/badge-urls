// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Puppet Forge endorsement (/puppetforge/e/:user/:moduleName) */
export const label = `Puppet Forge endorsement`;
/** URL for Puppet Forge endorsement (/puppetforge/e/:user/:moduleName) */
export const url = (user: string, modulename: string, options?: ShieldsIOOptions) => urlWithOptions(`/puppetforge/e/${user}/${modulename}`, options);