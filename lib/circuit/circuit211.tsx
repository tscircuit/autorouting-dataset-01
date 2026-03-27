/** Randomly generated circuit 211. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="40.00mm"
    height="40.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={4.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={16.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-1.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={7.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N19",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-15.0}
      pcbY={13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-3.0}
      pcbY={-15.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={13.0}
      pcbY={17.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-3.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={15.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N9",
        pin2: "net.N17",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={9.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin3: "net.N13",
        pin1: "net.N20",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-9.0}
      pcbY={-15.0}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N18",
        pin1: "net.N20",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-1.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N7",
        pin1: "net.N20",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N11",
        pin3: "net.N16",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-5.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N2",
        pin1: "net.N4",
        pin7: "net.N8",
        pin4: "net.N12",
        pin2: "net.N13",
        pin3: "net.N13",
        pin6: "net.N17",
        pin5: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="dip8"
      pcbX={15.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N3",
        pin6: "net.N5",
        pin1: "net.N6",
        pin3: "net.N6",
        pin7: "net.N11",
        pin5: "net.N14",
        pin2: "net.N15",
        pin4: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={-17.0}
      pcbY={-17.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin7: "net.N5",
        pin2: "net.N8",
        pin8: "net.N13",
        pin6: "net.N14",
        pin5: "net.N16",
        pin4: "net.N18",
        pin1: "net.N19",
        pin3: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={7.0}
      pcbY={-5.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N6",
        pin7: "net.N7",
        pin5: "net.N10",
        pin6: "net.N11",
        pin8: "net.N12",
        pin1: "net.N16",
        pin4: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
