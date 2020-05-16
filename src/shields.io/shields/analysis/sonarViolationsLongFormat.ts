// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonar Violations (long format) (/sonar/:metric/:component?format=long&server=http%3A%2F%2Fsonar.petalslink.com) */
export const label = `Sonar Violations (long format)`;
/** URL for Sonar Violations (long format) (/sonar/:metric/:component?format=long&server=http%3A%2F%2Fsonar.petalslink.com) */
export const url = (metric: string, component: string, options?: ShieldsIOOptions) => urlWithOptions(`/sonar/${metric}/${component}?format=long&server=http%3A%2F%2Fsonar.petalslink.com`, options);