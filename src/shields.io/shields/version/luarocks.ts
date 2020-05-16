// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for LuaRocks (/luarocks/v/:user/:moduleName/:version?) */
export const label = `LuaRocks`;
/** URL for LuaRocks (/luarocks/v/:user/:moduleName/:version?) */
export const url = (user: string, modulename: string, version: string, options?: ShieldsIOOptions) => urlWithOptions(`/luarocks/v/${user}/${modulename}/${version}`, options);