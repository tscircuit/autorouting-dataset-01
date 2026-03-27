/** Randomly generated circuit 288. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="29.00mm"
    height="52.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={7.5}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={9.5}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-6.5}
      pcbY={21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={0.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={7.5}
      pcbY={-2.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N21",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-7.5}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-3.5}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-7.5}
      pcbY={-22.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={3.5}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-8.5}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N18",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-11.5}
      pcbY={16.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N5",
        pin2: "net.N10",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-7.5}
      pcbY={9.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N15",
        pin3: "net.N17",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={8.5}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin3: "net.N13",
        pin1: "net.N14",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-11.5}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N4",
        pin2: "net.N12",
        pin1: "net.N16",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-9.5}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin3: "net.N7",
        pin2: "net.N11",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-6"
      footprint="SOT-23"
      pcbX={10.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N15",
        pin3: "net.N22",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-3.5}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin1: "net.N6",
        pin7: "net.N10",
        pin5: "net.N12",
        pin3: "net.N17",
        pin2: "net.N19",
        pin6: "net.N20",
        pin8: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-3.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N2",
        pin2: "net.N4",
        pin1: "net.N4",
        pin3: "net.N6",
        pin8: "net.N9",
        pin5: "net.N13",
        pin6: "net.N14",
        pin4: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={4.5}
      pcbY={-19.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N5",
        pin2: "net.N11",
        pin5: "net.N13",
        pin4: "net.N15",
        pin6: "net.N17",
        pin7: "net.N17",
        pin8: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={8.5}
      pcbY={23.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N9",
        pin3: "net.N13",
        pin2: "net.N16",
        pin1: "net.N20",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
