import { OverArgs } from "./types"
import { allAreWithInOutline } from "./allAreWithInOutline"
import { getObstacleThatHavePointsToConnect } from "./getObstacleThatHavePointsToConnect"
import { hasOverlappingObstacles } from "./hasOverlappingObstacles"

/** Validates SRJs for obstacle overlaps and outline bounds violations. */
export const check = (params: OverArgs[]) => {
  const failedFileNamesForObstacleOverlap: {
    filesName: string
    which: string
  }[] = []
  const failedFileNamesForOutOfBoardBounds: {
    filesName: string
    which: string
  }[] = []

  for (const { srj, fileName } of params) {
    const obstaclesThatHavePointsToConnect = getObstacleThatHavePointsToConnect(
      srj.obstacles,
      srj.connections.flatMap((connection) => connection.pointsToConnect),
    )
    const overlapResult = hasOverlappingObstacles(
      obstaclesThatHavePointsToConnect,
      srj.layerCount,
    )
    if (!overlapResult.ok) {
      failedFileNamesForObstacleOverlap.push({
        filesName: fileName,
        which: overlapResult.which,
      })
    }
    if (!allAreWithInOutline(obstaclesThatHavePointsToConnect, srj.bounds)) {
      failedFileNamesForOutOfBoardBounds.push({
        filesName: fileName,
        which: "",
      })
    }
  }

  failedFileNamesForObstacleOverlap.sort((a, b) =>
    a.filesName.localeCompare(b.filesName),
  )
  failedFileNamesForOutOfBoardBounds.sort((a, b) =>
    a.filesName.localeCompare(b.filesName),
  )

  return {
    failedFileNamesForObstacleOverlap,
    failedFileNamesForOutOfBoardBounds,
  }
}
