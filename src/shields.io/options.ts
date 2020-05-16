import createUrl from "../utils/createUrl";

export enum ShieldsIOShieldStyle {
  Plastic = "plastic",
  Flat = "flat",
  FlatSquare = "flat-square",
  ForTheBadge = "for-the-badge",
  Social = "social",
}

export enum ShieldsIOColor {
  BrightGreen = "brightgreen",
  Green = "green",
  YellowGreen = "yellowgreen",
  Yellow = "yellow",
  Orange = "orange",
  Red = "red",
  Blue = "blue",
  LightGrey = "lightgrey",
  Success = "success",
  Important = "important",
  Critical = "critical",
  Informational = "informational",
  Inactive = "inactive",
  BlueViolet = "blueviolet",
}

export interface ShieldsIOOptions {
  /** Base URL of the shields server */
  baseUrl?: string;
  /** Shield style */
  style?: ShieldsIOShieldStyle | string;
  /** Override the default left-hand-side text (URL-Encoding needed for spaces or special characters!) */
  label?: string;
  /**
   * Insert one of the named logos from (bitcoin, dependabot, discord, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or simple-icons. Simple-icons are referenced using names as they appear on the simple-icons site. If the name includes spaces, replace them with dashes (e.g: ?logo=visual-studio-code)
   *
   * Can also be a data URL. Insert custom logo image (≥ 14px high). There is a limit on the total size of request headers we can accept (8192 bytes). From a practical perspective, this means the base64-encoded image text is limited to somewhere slightly under 8192 bytes depending on the rest of the request header.
   */
  logo?: string;
  /** Set the color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos but not for custom logos. */
  logoColor?: string;
  /** Set the horizontal space to give to the logo */
  logoWidth?: string | number;
  /** Specify what clicking on the left/right of a badge should do (esp. for social badge style) */
  link?: string | [string, string] | { left: string; right: string };
  /** Set background of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported. */
  labelColor?: string;
  /** Set background of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported. */
  color?: string;
  /** Set the HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported. */
  cacheSeconds?: string | number;
}

const SHIELDS_IO_BASE_URL = "https://img.shields.io";

export const urlWithOptions = (
  urlOrPath: string,
  options: ShieldsIOOptions = {}
) => {
  const {
    baseUrl = SHIELDS_IO_BASE_URL,
    style,
    label,
    logo,
    logoColor,
    logoWidth,
    link,
    cacheSeconds,
  } = options;
  const url = createUrl(urlOrPath, baseUrl);

  if (style) {
    url.searchParams.set("style", style);
  }
  if (label) {
    url.searchParams.set("label", label);
  }
  if (logo) {
    url.searchParams.set("logo", logo);
  }
  if (logoColor) {
    url.searchParams.set("logoColor", logoColor);
  }
  if (logoWidth) {
    url.searchParams.set("logoWidth", logoWidth.toString());
  }
  if (link) {
    if (typeof link === "string") {
      url.searchParams.set("link", link);
    } else if (Array.isArray(link)) {
      url.searchParams.set("link", link[0]);
      url.searchParams.append("link", link[1]);
    } else {
      url.searchParams.set("link", link.left);
      url.searchParams.append("link", link.right);
    }
  }
  if (cacheSeconds) {
    url.searchParams.set("cacheSeconds", cacheSeconds.toString());
  }

  return url.toString();
};
