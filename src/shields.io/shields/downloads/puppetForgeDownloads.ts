// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Puppet Forge downloads (/puppetforge/dt/:user/:moduleName) */
export const label = `Puppet Forge downloads`;
/** URL for Puppet Forge downloads (/puppetforge/dt/:user/:moduleName) */
export const url = (user: string, modulename: string, options?: ShieldsIOOptions) => urlWithOptions(`/puppetforge/dt/${user}/${modulename}`, options);