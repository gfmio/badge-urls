// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Maven Central with version prefix filter (/maven-central/v/:groupId/:artifactId/:versionPrefix) */
export const label = `Maven Central with version prefix filter`;
/** URL for Maven Central with version prefix filter (/maven-central/v/:groupId/:artifactId/:versionPrefix) */
export const url = (groupid: string, artifactid: string, versionprefix: string, options?: ShieldsIOOptions) => urlWithOptions(`/maven-central/v/${groupid}/${artifactid}/${versionprefix}`, options);