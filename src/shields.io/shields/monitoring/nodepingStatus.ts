// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for NodePing status (/nodeping/status/:checkUuid?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online) */
export const label = `NodePing status`;
/** URL for NodePing status (/nodeping/status/:checkUuid?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online) */
export const url = (checkuuid: string, options?: ShieldsIOOptions) => urlWithOptions(`/nodeping/status/${checkuuid}?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online`, options);