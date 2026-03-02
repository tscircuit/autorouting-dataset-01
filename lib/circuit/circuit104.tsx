/** Randomly generated circuit 104. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="56.70mm"
    height="32.40mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={12.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-3.75}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={18.75}
      pcbY={-1.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-13.75}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-20.0}
      pcbY={-1.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-17.5}
      pcbY={-11.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-15.0}
      pcbY={-1.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-10.0}
      pcbY={8.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={0.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={12.5}
      pcbY={3.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-20.0}
      pcbY={6.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin3: "net.N9",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={7.5}
      pcbY={-8.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin2: "net.N10",
        pin1: "net.N10",
      }}
      type="npn"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={17.5}
      pcbY={-6.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin4: "net.N4",
        pin5: "net.N4",
        pin6: "net.N10",
        pin2: "net.N11",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic8"
      pcbX={12.5}
      pcbY={8.75}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin7: "net.N2",
        pin4: "net.N5",
        pin3: "net.N7",
        pin8: "net.N8",
        pin6: "net.N9",
        pin1: "net.N11",
        pin5: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={0.0}
      pcbY={-1.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
