import type { ComponentType } from "types/ComponentType"

export type PlacementMargin = {
  left: number
  right: number
  top: number
  bottom: number
}

/**
 * Detailed specification for a circuit component.
 */
export type ComponentSpecification = {
  type: ComponentType
  name: string
  footprint: string
  pinCount: number
  pinNames: string[]
  pcbX: number
  pcbY: number
  pcbRotation: number
  layer: "top" | "bottom"
  width: number
  height: number
  placementMargin: PlacementMargin
  connections: Record<string, string>
  transistorType?: "npn" | "pnp" | "bjt" | "jfet" | "mosfet"
}
