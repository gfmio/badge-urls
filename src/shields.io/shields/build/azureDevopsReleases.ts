// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps releases (/azure-devops/release/:organization/:projectId/:definitionId/:environmentId) */
export const label = `Azure DevOps releases`;
/** URL for Azure DevOps releases (/azure-devops/release/:organization/:projectId/:definitionId/:environmentId) */
export const url = (organization: string, projectid: string, definitionid: string, environmentid: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/release/${organization}/${projectid}/${definitionid}/${environmentid}`, options);