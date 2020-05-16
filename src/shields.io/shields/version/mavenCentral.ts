// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Maven Central (/maven-central/v/:groupId/:artifactId) */
export const label = `Maven Central`;
/** URL for Maven Central (/maven-central/v/:groupId/:artifactId) */
export const url = (groupid: string, artifactid: string, options?: ShieldsIOOptions) => urlWithOptions(`/maven-central/v/${groupid}/${artifactid}`, options);