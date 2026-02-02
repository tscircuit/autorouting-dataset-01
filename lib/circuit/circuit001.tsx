/** Minimal RC network demo board: one resistor, one capacitor, and a single trace between them. */
// @ts-expect-error
import { SmdUsbC } from "@tsci/seveibar.smd-usb-c"

export default () => {
  return (
    <board
      routingDisabled={
        (typeof globalThis !== "undefined" &&
          (globalThis as any).TSCIRCUIT_ROUTING_DISABLED === "1") ||
        (typeof process !== "undefined" &&
          !!process.env &&
          process.env.TSCIRCUIT_ROUTING_DISABLED === "1")
      }
      width="12mm"
      height="30mm"
    >
      <SmdUsbC
        name="J1"
        connections={{
          GND1: "net.GND",
          GND2: "net.GND",
          VBUS1: "net.VBUS",
          VBUS2: "net.VBUS",
        }}
        pcbY={-10.5}
      />
      <led
        name="LED"
        supplierPartNumbers={{
          jlcpcb: ["965799"],
        }}
        color="red"
        footprint="0603"
        pcbX={3}
        pcbY={12}
      />
      <pushbutton
        name="SW1"
        pcbRotation="90deg"
        footprint="pushbutton_id1.3mm_od2mm"
        connections={{ pin1: ".R1 > .pos", pin2: "net.VBUS" }}
        supplierPartNumbers={{
          jlcpcb: ["C110153"],
        }}
      />
      <resistor name="R1" footprint="0603" resistance="1k" pcbX={-3} pcbY={7} />

      <trace from="R1.neg" to="LED.pos" />
      <trace from="LED.neg" to="net.GND" />
    </board>
  )
}
