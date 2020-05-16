/** Converts `pathOrUrl` to a URL object. If the argument is a path, it will be prefix with the `baseUrl` */
export default function createUrl(urlOrPath: string, prefix: string) {
  try {
    return new URL(urlOrPath);
  } catch {
    return new URL(
      prefix +
        (urlOrPath.length > 0
          ? urlOrPath.startsWith("/")
            ? urlOrPath
            : "/" + urlOrPath
          : "")
    );
  }
}
