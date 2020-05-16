// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for node-current (scoped with tag, custom registry) (/node/v/@:scope/:packageName/:tag?registry_uri=https%3A%2F%2Fregistry.npmjs.com) */
export const label = `node-current (scoped with tag, custom registry)`;
/** URL for node-current (scoped with tag, custom registry) (/node/v/@:scope/:packageName/:tag?registry_uri=https%3A%2F%2Fregistry.npmjs.com) */
export const url = (packagename: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/node/v/@:scope/${packagename}/${tag}?registry_uri=https%3A%2F%2Fregistry.npmjs.com`, options);