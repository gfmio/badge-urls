// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for JIRA sprint completion (/jira/sprint/:sprintId?baseUrl=https%3A%2F%2Fjira.spring.io) */
export const label = `JIRA sprint completion`;
/** URL for JIRA sprint completion (/jira/sprint/:sprintId?baseUrl=https%3A%2F%2Fjira.spring.io) */
export const url = (sprintid: string, options?: ShieldsIOOptions) => urlWithOptions(`/jira/sprint/${sprintid}?baseUrl=https%3A%2F%2Fjira.spring.io`, options);