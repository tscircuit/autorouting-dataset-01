import { ComponentType } from "types/ComponentType";
import {
  capacitorPins,
  diodePins,
  inductorPins,
  resistorPins,
  transistorPinsLabels,
} from "@tscircuit/props"
export const allowedPinsByType: Partial<Record<ComponentType, readonly string[]>> = {
  resistor: resistorPins,
  capacitor: capacitorPins,
  inductor: inductorPins,
  diode: diodePins,
  transistor: transistorPinsLabels,
}