// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Gitlab pipeline status (self-hosted) (/gitlab/pipeline/:user/:repo?gitlab_url=https%3A%2F%2Fgitlab.gnome.org) */
export const label = `Gitlab pipeline status (self-hosted)`;
/** URL for Gitlab pipeline status (self-hosted) (/gitlab/pipeline/:user/:repo?gitlab_url=https%3A%2F%2Fgitlab.gnome.org) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/gitlab/pipeline/${user}/${repo}?gitlab_url=https%3A%2F%2Fgitlab.gnome.org`, options);