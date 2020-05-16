// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps builds (branch) (/azure-devops/build/:organization/:projectId/:definitionId/:branch) */
export const label = `Azure DevOps builds (branch)`;
/** URL for Azure DevOps builds (branch) (/azure-devops/build/:organization/:projectId/:definitionId/:branch) */
export const url = (organization: string, projectid: string, definitionid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/build/${organization}/${projectid}/${definitionid}/${branch}`, options);