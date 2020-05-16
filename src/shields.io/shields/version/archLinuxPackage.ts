// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Arch Linux package (/archlinux/v/:repository/:architecture/:packageName) */
export const label = `Arch Linux package`;
/** URL for Arch Linux package (/archlinux/v/:repository/:architecture/:packageName) */
export const url = (repository: string, architecture: string, packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/archlinux/v/${repository}/${architecture}/${packagename}`, options);