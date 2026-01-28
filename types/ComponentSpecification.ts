import type { ComponentType } from "types/ComponentType"

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
  width: number
  height: number
  connections: Record<string, string>
  transistorType?: "npn" | "pnp"
}
