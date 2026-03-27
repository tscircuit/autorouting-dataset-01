/** Randomly generated circuit 217. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="42.00mm"
    height="24.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-14.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={14.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-18.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-14.0}
      pcbY={5.0}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-7.0}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-9.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={2.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N16",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={8.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={10.0}
      pcbY={3.0}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
        pin3: "net.N16",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={14.0}
      pcbY={-7.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
        pin3: "net.N20",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={18.0}
      pcbY={7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin8: "net.N3",
        pin1: "net.N3",
        pin6: "net.N4",
        pin4: "net.N8",
        pin5: "net.N11",
        pin7: "net.N17",
        pin2: "net.N19",
        pin3: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={0.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin3: "net.N8",
        pin5: "net.N10",
        pin4: "net.N14",
        pin6: "net.N17",
        pin2: "net.N17",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-8.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin4: "net.N5",
        pin5: "net.N6",
        pin3: "net.N12",
        pin6: "net.N13",
        pin2: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-4.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N2",
        pin3: "net.N10",
        pin6: "net.N12",
        pin1: "net.N16",
        pin5: "net.N18",
        pin2: "net.N18",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
