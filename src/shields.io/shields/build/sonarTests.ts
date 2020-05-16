// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonar Tests (/sonar/tests/:component?compact_message&failed_label=failed&passed_label=passed&server=http%3A%2F%2Fsonar.petalslink.com&skipped_label=skipped&sonarVersion=4.2) */
export const label = `Sonar Tests`;
/** URL for Sonar Tests (/sonar/tests/:component?compact_message&failed_label=failed&passed_label=passed&server=http%3A%2F%2Fsonar.petalslink.com&skipped_label=skipped&sonarVersion=4.2) */
export const url = (component: string, options?: ShieldsIOOptions) => urlWithOptions(`/sonar/tests/${component}?compact_message&failed_label=failed&passed_label=passed&server=http%3A%2F%2Fsonar.petalslink.com&skipped_label=skipped&sonarVersion=4.2`, options);