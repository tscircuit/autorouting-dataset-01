/** Randomly generated circuit 142. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="50.00mm"
    height="50.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-16.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={13.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={4.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={13.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={4.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-6.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-16.0}
      pcbY={22.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={22.0}
      pcbY={18.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N20",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-18.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={1.0}
      pcbY={-15.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N16",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-18.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N22",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={-11.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N21",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={12.0}
      pcbY={2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin3: "net.N18",
        pin2: "net.N19",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-20.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin3: "net.N8",
        pin1: "net.N9",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-10.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N12",
        pin1: "net.N17",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={22.0}
      pcbY={-22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N5",
        pin6: "net.N15",
        pin2: "net.N16",
        pin1: "net.N17",
        pin4: "net.N18",
        pin3: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-2.0}
      pcbY={-2.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin6: "net.N2",
        pin3: "net.N5",
        pin2: "net.N11",
        pin5: "net.N12",
        pin4: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={4.0}
      pcbY={-22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N22",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={12.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-2.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin5: "net.N4",
        pin1: "net.N10",
        pin3: "net.N11",
        pin6: "net.N13",
        pin4: "net.N20",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={-20.0}
      pcbY={20.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N7",
        pin2: "net.N7",
        pin6: "net.N8",
        pin5: "net.N10",
        pin1: "net.N19",
        pin3: "net.N20",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
