// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonar Tech Debt (/sonar/:metric/:component?server=http%3A%2F%2Fsonar.petalslink.com&sonarVersion=4.2) */
export const label = `Sonar Tech Debt`;
/** URL for Sonar Tech Debt (/sonar/:metric/:component?server=http%3A%2F%2Fsonar.petalslink.com&sonarVersion=4.2) */
export const url = (metric: string, component: string, options?: ShieldsIOOptions) => urlWithOptions(`/sonar/${metric}/${component}?server=http%3A%2F%2Fsonar.petalslink.com&sonarVersion=4.2`, options);