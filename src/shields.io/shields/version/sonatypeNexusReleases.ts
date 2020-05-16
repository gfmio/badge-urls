// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonatype Nexus (Releases) (/nexus/r/:groupId/:artifactId?nexusVersion=3&server=https%3A%2F%2Fnexus.pentaho.org) */
export const label = `Sonatype Nexus (Releases)`;
/** URL for Sonatype Nexus (Releases) (/nexus/r/:groupId/:artifactId?nexusVersion=3&server=https%3A%2F%2Fnexus.pentaho.org) */
export const url = (groupid: string, artifactid: string, options?: ShieldsIOOptions) => urlWithOptions(`/nexus/r/${groupid}/${artifactid}?nexusVersion=3&server=https%3A%2F%2Fnexus.pentaho.org`, options);