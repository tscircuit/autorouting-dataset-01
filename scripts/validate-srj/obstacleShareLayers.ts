import { Obstacle } from "tscircuit"
import { mapLayerNameToZ } from "lib/layer/mapLayerNameToZ"

/** Checks whether two obstacles share at least one layer. */
export const obstacleShareLayers = (
  obstacle1: Obstacle,
  obstacle2: Obstacle,
  layerCount: number,
): boolean => {
  const layers1 = obstacle1.layers.map((layer) =>
    mapLayerNameToZ(layer, layerCount),
  )
  const layers2 = obstacle2.layers.map((layer) =>
    mapLayerNameToZ(layer, layerCount),
  )
  return layers1.some((layer) => layers2.includes(layer))
}
