import {
  capacitorPins,
  diodePins,
  inductorPins,
  resistorPins,
  transistorPinsLabels,
} from "@tscircuit/props"
import type { ComponentType } from "types/ComponentType"
export const allowedPinsByType: Partial<
  Record<ComponentType, readonly string[]>
> = {
  resistor: resistorPins,
  capacitor: capacitorPins,
  inductor: inductorPins,
  diode: diodePins,
  transistor: transistorPinsLabels,
}
