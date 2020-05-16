// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonar Quality Gate (/sonar/:metric/:component?server=https%3A%2F%2Fsonarcloud.io&sonarVersion=4.2) */
export const label = `Sonar Quality Gate`;
/** URL for Sonar Quality Gate (/sonar/:metric/:component?server=https%3A%2F%2Fsonarcloud.io&sonarVersion=4.2) */
export const url = (metric: string, component: string, options?: ShieldsIOOptions) => urlWithOptions(`/sonar/${metric}/${component}?server=https%3A%2F%2Fsonarcloud.io&sonarVersion=4.2`, options);