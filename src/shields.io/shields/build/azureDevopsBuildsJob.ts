// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Azure DevOps builds (job) (/azure-devops/build/:organization/:projectId/:definitionId/:branch*?job=Successful%20Job&stage=Successful%20Stage) */
export const label = `Azure DevOps builds (job)`;
/** URL for Azure DevOps builds (job) (/azure-devops/build/:organization/:projectId/:definitionId/:branch*?job=Successful%20Job&stage=Successful%20Stage) */
export const url = (organization: string, projectid: string, definitionid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/azure-devops/build/${organization}/${projectid}/${definitionid}/${branch}?job=Successful%20Job&stage=Successful%20Stage`, options);