// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Sonatype Nexus (Repository) (/nexus/:repo/:groupId/:artifactId?server=https%3A%2F%2Frepository.jboss.org%2Fnexus) */
export const label = `Sonatype Nexus (Repository)`;
/** URL for Sonatype Nexus (Repository) (/nexus/:repo/:groupId/:artifactId?server=https%3A%2F%2Frepository.jboss.org%2Fnexus) */
export const url = (repo: string, groupid: string, artifactid: string, options?: ShieldsIOOptions) => urlWithOptions(`/nexus/${repo}/${groupid}/${artifactid}?server=https%3A%2F%2Frepository.jboss.org%2Fnexus`, options);