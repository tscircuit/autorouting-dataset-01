/** Randomly generated circuit 158. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="34.00mm"
    height="20.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={11.0}
      pcbY={3.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-2.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={14.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N18",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N19",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-10.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N9",
        pin1: "net.N15",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={4.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N7",
        pin2: "net.N19",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-3.0}
      pcbY={7.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N11",
        pin3: "net.N13",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-10.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin12: "net.N2",
        pin1: "net.N5",
        pin5: "net.N6",
        pin15: "net.N7",
        pin13: "net.N8",
        pin6: "net.N10",
        pin9: "net.N10",
        pin16: "net.N11",
        pin2: "net.N12",
        pin4: "net.N13",
        pin7: "net.N14",
        pin11: "net.N15",
        pin10: "net.N16",
        pin3: "net.N16",
        pin14: "net.N18",
        pin8: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic8"
      pcbX={10.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin5: "net.N6",
        pin3: "net.N12",
        pin7: "net.N16",
        pin6: "net.N17",
        pin8: "net.N17",
        pin2: "net.N20",
        pin4: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic16"
      pcbX={-10.0}
      pcbY={1.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin15: "net.N2",
        pin14: "net.N3",
        pin7: "net.N4",
        pin12: "net.N4",
        pin10: "net.N4",
        pin8: "net.N8",
        pin6: "net.N8",
        pin9: "net.N9",
        pin4: "net.N11",
        pin11: "net.N14",
        pin5: "net.N14",
        pin16: "net.N15",
        pin13: "net.N16",
        pin3: "net.N17",
        pin1: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={4.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
