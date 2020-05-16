import replaceAll from "../../utils/replaceAll";
import firstAvailableSafeName from "../../utils/firstAvailableSafeName";
import { camelCase } from "../../utils/case";

const OPTIONS_IMPORT_PREFIX =
  'import { ShieldsIOOptions, urlWithOptions } from "../../options";\n';

function generateShieldFunction(url: string) {
  const pathVariables: string[] = [];
  const [urlPath, urlQuery] = url.split("?");
  const urlPathTemplate = urlPath
    .split("/")
    .map((part) => {
      if (part.startsWith(":")) {
        const pathVariable = firstAvailableSafeName(
          camelCase(part.substring(1)),
          pathVariables
        );
        return "${" + pathVariable + "}";
      } else {
        return part;
      }
    })
    .join("/");
  const urlTemplate = urlQuery
    ? urlPathTemplate + "?" + urlQuery
    : urlPathTemplate;

  const code = `(${pathVariables
    .map((pathVariable) => `${pathVariable}: string`)
    .concat(["options?: ShieldsIOOptions"])
    .join(", ")}) => urlWithOptions(\`${urlTemplate}\`, options)`;

  return code;
}

export default function generateShieldModule(label: string, url: string) {
  const escapedLabel = replaceAll(label, "`", "`");
  const labelDocstring = `/** Label for ${label} (${url}) */`;
  const labelLine = `export const label = \`${escapedLabel}\`;`;
  const urlDocstring = `/** URL for ${label} (${url}) */`;
  const functionLine = `export const url = ${generateShieldFunction(url)};`;
  return [
    OPTIONS_IMPORT_PREFIX,
    labelDocstring,
    labelLine,
    urlDocstring,
    functionLine,
  ].join("\n");
}
