// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonatype Nexus (Snapshots) (/nexus/s/:groupId/:artifactId?server=https%3A%2F%2Foss.sonatype.org) */
export const label = `Sonatype Nexus (Snapshots)`;
/** URL for Sonatype Nexus (Snapshots) (/nexus/s/:groupId/:artifactId?server=https%3A%2F%2Foss.sonatype.org) */
export const url = (groupid: string, artifactid: string, options?: ShieldsIOOptions) => urlWithOptions(`/nexus/s/${groupid}/${artifactid}?server=https%3A%2F%2Foss.sonatype.org`, options);