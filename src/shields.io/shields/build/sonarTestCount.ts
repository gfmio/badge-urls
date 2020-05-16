// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonar Test Count (/sonar/:metric/:component?server=http%3A%2F%2Fsonar.petalslink.com&sonarVersion=4.2) */
export const label = `Sonar Test Count`;
/** URL for Sonar Test Count (/sonar/:metric/:component?server=http%3A%2F%2Fsonar.petalslink.com&sonarVersion=4.2) */
export const url = (metric: string, component: string, options?: ShieldsIOOptions) => urlWithOptions(`/sonar/${metric}/${component}?server=http%3A%2F%2Fsonar.petalslink.com&sonarVersion=4.2`, options);