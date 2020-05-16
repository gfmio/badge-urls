// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for POEditor (/poeditor/progress/:projectId/:languageCode?token=abc123def456) */
export const label = `POEditor`;
/** URL for POEditor (/poeditor/progress/:projectId/:languageCode?token=abc123def456) */
export const url = (projectid: string, languagecode: string, options?: ShieldsIOOptions) => urlWithOptions(`/poeditor/progress/${projectid}/${languagecode}?token=abc123def456`, options);