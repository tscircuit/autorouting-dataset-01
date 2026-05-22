/** Minimal RC network demo board: one resistor, one capacitor, and a single trace between them. */
import type { ChipProps } from "@tscircuit/props"
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

const usbCPinLabels = {
  GND1: ["GND1"],
  GND2: ["GND2"],
  VBUS1: ["VBUS1"],
  VBUS2: ["VBUS2"],
} as const

const SmdUsbC = (props: ChipProps<typeof usbCPinLabels>) => (
  <chip
    pinLabels={usbCPinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["GND1", "VBUS1", "VBUS2", "GND2"],
      },
    }}
    manufacturerPartNumber="GENERIC_USB_C_POWER_ONLY"
    footprint={
      <footprint>
        <smtpad
          portHints={["GND1"]}
          pcbX="-1.2mm"
          pcbY="0.75mm"
          width="0.5mm"
          height="1.4mm"
          shape="rect"
        />
        <smtpad
          portHints={["VBUS1"]}
          pcbX="-0.4mm"
          pcbY="0.75mm"
          width="0.5mm"
          height="1.4mm"
          shape="rect"
        />
        <smtpad
          portHints={["VBUS2"]}
          pcbX="0.4mm"
          pcbY="0.75mm"
          width="0.5mm"
          height="1.4mm"
          shape="rect"
        />
        <smtpad
          portHints={["GND2"]}
          pcbX="1.2mm"
          pcbY="0.75mm"
          width="0.5mm"
          height="1.4mm"
          shape="rect"
        />
        <smtpad
          portHints={["GND1"]}
          pcbX="-3.1mm"
          pcbY="-0.75mm"
          width="1.2mm"
          height="1.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["GND2"]}
          pcbX="3.1mm"
          pcbY="-0.75mm"
          width="1.2mm"
          height="1.7mm"
          shape="rect"
        />
      </footprint>
    }
    {...props}
  />
)

export default () => {
  return (
    <board routingDisabled={!shouldAutorouterRun()} width="12mm" height="30mm">
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
