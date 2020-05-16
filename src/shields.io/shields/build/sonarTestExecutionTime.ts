// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonar Test Execution Time (/sonar/test_execution_time/:component?server=https%3A%2F%2Fsonarcloud.io&sonarVersion=4.2) */
export const label = `Sonar Test Execution Time`;
/** URL for Sonar Test Execution Time (/sonar/test_execution_time/:component?server=https%3A%2F%2Fsonarcloud.io&sonarVersion=4.2) */
export const url = (component: string, options?: ShieldsIOOptions) => urlWithOptions(`/sonar/test_execution_time/${component}?server=https%3A%2F%2Fsonarcloud.io&sonarVersion=4.2`, options);