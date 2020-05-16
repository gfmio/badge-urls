// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps tests (compact) (/azure-devops/tests/:organization/:project/:definitionId?compact_message) */
export const label = `Azure DevOps tests (compact)`;
/** URL for Azure DevOps tests (compact) (/azure-devops/tests/:organization/:project/:definitionId?compact_message) */
export const url = (organization: string, project: string, definitionid: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/tests/${organization}/${project}/${definitionid}?compact_message`, options);