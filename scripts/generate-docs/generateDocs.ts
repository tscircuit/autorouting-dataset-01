import { collectFiles } from "scripts/generate-docs/collectFiles"
import { toPosix } from "scripts/generate-docs/toPosix"
import { updateReadmeForDirectory } from "scripts/generate-docs/updateReadmeForDirectory"

/**
 * Automates the generation of README.md documentation for the project.
 */
export const generateDocs = (options: {
  directories: Array<{ path: string; depth: number }>
}): void => {
  const { directories } = options
  const fileList: string[] = []

  for (const directory of directories) {
    collectFiles(directory.path, fileList, directory.depth)
  }

  const filesByDirectoryCache = new Map<string, string[]>()
  for (const directory of directories) {
    filesByDirectoryCache.set(directory.path, [])
  }

  for (const file of fileList) {
    const normalizedPath = toPosix(file)
    for (const directory of directories) {
      if (normalizedPath.startsWith(`${directory.path}/`)) {
        filesByDirectoryCache.get(directory.path)?.push(normalizedPath)
        break
      }
    }
  }

  for (const [directory, directoryFiles] of filesByDirectoryCache.entries()) {
    updateReadmeForDirectory({ directory, directoryFiles })
  }
}
