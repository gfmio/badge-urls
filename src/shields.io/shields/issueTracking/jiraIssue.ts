// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for JIRA issue (/jira/issue/:issueKey?baseUrl=https%3A%2F%2Fissues.apache.org%2Fjira) */
export const label = `JIRA issue`;
/** URL for JIRA issue (/jira/issue/:issueKey?baseUrl=https%3A%2F%2Fissues.apache.org%2Fjira) */
export const url = (issuekey: string, options?: ShieldsIOOptions) => urlWithOptions(`/jira/issue/${issuekey}?baseUrl=https%3A%2F%2Fissues.apache.org%2Fjira`, options);