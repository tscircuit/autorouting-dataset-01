import { getObstaclesOutsideOutline } from "./getObstaclesOutsideOutline"
import { getObstacleThatHavePointsToConnect } from "./getObstacleThatHavePointsToConnect"
import { hasOverlappingObstacles } from "./hasOverlappingObstacles"
import type { OverArgs } from "./types"

/** Validates SRJs for obstacle overlaps and outline bounds violations. */
export const check = (params: OverArgs[]) => {
  const failedFileNamesForObstacleOverlap: {
    filesName: string
    which?: string
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
    const obstaclesOutsideOutline = getObstaclesOutsideOutline(
      srj.obstacles,
      srj.bounds,
    )
    if (obstaclesOutsideOutline.length > 0) {
      const firstObstacle = obstaclesOutsideOutline[0]
      failedFileNamesForOutOfBoardBounds.push({
        filesName: fileName,
        which: `obstacle at center: x:${firstObstacle.center.x} y:${firstObstacle.center.y} size: w:${firstObstacle.width} h:${firstObstacle.height}`,
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
