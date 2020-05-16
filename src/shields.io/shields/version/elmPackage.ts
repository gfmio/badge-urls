// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Elm package (/elm-package/v/:user/:packageName) */
export const label = `Elm package`;
/** URL for Elm package (/elm-package/v/:user/:packageName) */
export const url = (user: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/elm-package/v/${user}/${packagename}`, options);