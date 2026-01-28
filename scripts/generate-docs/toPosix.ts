/**
 * Normalizes a path string to use POSIX separators.
 */
export const toPosix = (pathString: string): string =>
  pathString.replace(/\\/g, "/")
