/** Randomly generated circuit 141. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="70.88mm"
    height="70.88mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={21.563}
      pcbY={8.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-23.438}
      pcbY={-10.313}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-0.938}
      pcbY={19.688}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={0.938}
      pcbY={25.313}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-23.438}
      pcbY={21.563}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-25.313}
      pcbY={-15.938}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={17.813}
      pcbY={-19.688}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-12.188}
      pcbY={8.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-17.813}
      pcbY={21.563}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N17",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={8.438}
      pcbY={-2.813}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={25.313}
      pcbY={2.813}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N21",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={21.563}
      pcbY={-23.438}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod123"
      pcbX={-6.563}
      pcbY={-14.063}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N19",
      }}
    />
    <diode
      name="diode-7"
      footprint="sod323"
      pcbX={-17.813}
      pcbY={6.563}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N22",
      }}
    />
    <diode
      name="diode-8"
      footprint="sod123"
      pcbX={-21.563}
      pcbY={0.938}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N16",
      }}
    />
    <diode
      name="diode-9"
      footprint="sod123"
      pcbX={12.188}
      pcbY={-21.563}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
    />
    <diode
      name="diode-10"
      footprint="sod323"
      pcbX={14.063}
      pcbY={27.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N21",
      }}
    />
    <diode
      name="diode-11"
      footprint="sod123"
      pcbX={23.438}
      pcbY={17.813}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N18",
      }}
    />
    <diode
      name="diode-12"
      footprint="sod323"
      pcbX={-12.188}
      pcbY={-0.938}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-27.188}
      pcbY={2.813}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
        pin3: "net.N6",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-27.188}
      pcbY={-27.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N3",
        pin3: "net.N16",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-19.688}
      pcbY={-27.188}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
        pin3: "net.N15",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={6.563}
      pcbY={-12.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N13",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-4.688}
      pcbY={-27.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N2",
        pin2: "net.N10",
        pin4: "net.N11",
        pin1: "net.N12",
        pin7: "net.N16",
        pin5: "net.N17",
        pin6: "net.N17",
        pin3: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={2.813}
      pcbY={2.813}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin1: "net.N2",
        pin7: "net.N4",
        pin2: "net.N8",
        pin5: "net.N9",
        pin8: "net.N12",
        pin6: "net.N13",
        pin3: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={21.563}
      pcbY={-12.188}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
