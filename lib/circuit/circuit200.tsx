/** Randomly generated circuit 200. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="26.00mm"
    height="46.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={0.0}
      pcbY={2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={9.0}
      pcbY={-20.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={3.0}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={9.0}
      pcbY={-16.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N17",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0805"
      pcbX={-9.0}
      pcbY={-17.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={10.0}
      pcbY={16.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-4.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={10.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-10.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={6.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin1: "net.N18",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-10.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={6.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N8",
        pin2: "net.N11",
      }}
      type="npn"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-4.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N6",
        pin1: "net.N17",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={6.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N3",
        pin4: "net.N5",
        pin2: "net.N7",
        pin5: "net.N9",
        pin1: "net.N13",
        pin3: "net.N13",
        pin6: "net.N15",
        pin8: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={2.0}
      pcbY={-16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N8",
        pin7: "net.N9",
        pin1: "net.N11",
        pin6: "net.N11",
        pin8: "net.N13",
        pin2: "net.N14",
        pin3: "net.N15",
        pin4: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-6.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N10",
        pin4: "net.N14",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={6.0}
      pcbY={-2.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-2.0}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N17",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-4.0}
      pcbY={-2.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin3: "net.N10",
        pin4: "net.N16",
        pin1: "net.N18",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
