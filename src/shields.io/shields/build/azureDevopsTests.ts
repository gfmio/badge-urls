// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps tests (/azure-devops/tests/:organization/:project/:definitionId) */
export const label = `Azure DevOps tests`;
/** URL for Azure DevOps tests (/azure-devops/tests/:organization/:project/:definitionId) */
export const url = (organization: string, project: string, definitionid: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/tests/${organization}/${project}/${definitionid}`, options);