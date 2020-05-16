// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for npm collaborators (/npm/collaborators/:packageName?registry_uri=https%3A%2F%2Fregistry.npmjs.com) */
export const label = `npm collaborators`;
/** URL for npm collaborators (/npm/collaborators/:packageName?registry_uri=https%3A%2F%2Fregistry.npmjs.com) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/collaborators/${packagename}?registry_uri=https%3A%2F%2Fregistry.npmjs.com`, options);