import { formatConnections } from "scripts/random-circuits/formatConnections"
import type { ComponentSpecification } from "types/ComponentSpecification"

/**
 * Converts a component specification to a JSX string.
 */
export const componentToJsx = (component: ComponentSpecification): string => {
  const baseProperties = [
    `name="${component.name}"`,
    `footprint="${component.footprint}"`,
    `pcbX={${component.pcbX.toFixed(2)}}`,
    `pcbY={${component.pcbY.toFixed(2)}}`,
    `pcbRotation={${component.pcbRotation.toFixed(2)}}`,
    `layer="${component.layer}"`,
    `connections={${formatConnections(component.connections)}}`,
  ]

  if (component.type === "resistor") {
    return `    <resistor ${baseProperties.join(" ")} resistance="1k" />`
  }
  if (component.type === "capacitor") {
    return `    <capacitor ${baseProperties.join(" ")} capacitance="0.1uF" />`
  }
  if (component.type === "inductor") {
    return `    <inductor ${baseProperties.join(" ")} inductance="10uH" />`
  }
  if (component.type === "diode") {
    return `    <diode ${baseProperties.join(" ")} />`
  }
  if (component.type === "transistor") {
    const transistorType = component.transistorType ?? "npn"
    return `    <transistor ${baseProperties.join(" ")} type="${transistorType}" />`
  }
  if (component.type === "pinhead") {
    return `    <pinheader ${baseProperties.join(" ")} pinCount={${
      component.pinCount
    }} pitch="2.54mm" />`
  }
  return `    <chip ${baseProperties.join(" ")} manufacturerPartNumber="GENERIC" />`
}
