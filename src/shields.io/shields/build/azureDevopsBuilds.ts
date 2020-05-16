// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps builds (/azure-devops/build/:organization/:projectId/:definitionId) */
export const label = `Azure DevOps builds`;
/** URL for Azure DevOps builds (/azure-devops/build/:organization/:projectId/:definitionId) */
export const url = (organization: string, projectid: string, definitionid: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/build/${organization}/${projectid}/${definitionid}`, options);