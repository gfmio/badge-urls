// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps tests with custom labels (/azure-devops/tests/:organization/:project/:definitionId?failed_label=bad&passed_label=good&skipped_label=n%2Fa) */
export const label = `Azure DevOps tests with custom labels`;
/** URL for Azure DevOps tests with custom labels (/azure-devops/tests/:organization/:project/:definitionId?failed_label=bad&passed_label=good&skipped_label=n%2Fa) */
export const url = (organization: string, project: string, definitionid: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/tests/${organization}/${project}/${definitionid}?failed_label=bad&passed_label=good&skipped_label=n%2Fa`, options);