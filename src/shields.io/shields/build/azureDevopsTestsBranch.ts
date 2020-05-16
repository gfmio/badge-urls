// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps tests (branch) (/azure-devops/tests/:organization/:project/:definitionId/:branch) */
export const label = `Azure DevOps tests (branch)`;
/** URL for Azure DevOps tests (branch) (/azure-devops/tests/:organization/:project/:definitionId/:branch) */
export const url = (organization: string, project: string, definitionid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/tests/${organization}/${project}/${definitionid}/${branch}`, options);