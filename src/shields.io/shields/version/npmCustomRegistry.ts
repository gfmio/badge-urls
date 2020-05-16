// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm (custom registry) (/npm/v/:packageName/:tag?registry_uri=https%3A%2F%2Fregistry.npmjs.com) */
export const label = `npm (custom registry)`;
/** URL for npm (custom registry) (/npm/v/:packageName/:tag?registry_uri=https%3A%2F%2Fregistry.npmjs.com) */
export const url = (packagename: string, tag: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/v/${packagename}/${tag}?registry_uri=https%3A%2F%2Fregistry.npmjs.com`, options);