/** Randomly generated circuit 148. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="35.10mm"
    height="35.10mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={12.5}
      pcbY={12.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={6.25}
      pcbY={6.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={12.5}
      pcbY={-8.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-5.0}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
        pin3: "net.N11",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-5.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin3: "net.N7",
        pin1: "net.N9",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={12.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N10",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-3.75}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N2",
        pin3: "net.N2",
        pin1: "net.N4",
        pin2: "net.N6",
        pin6: "net.N8",
        pin4: "net.N9",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={-8.75}
      pcbY={6.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin5: "net.N4",
        pin7: "net.N6",
        pin2: "net.N6",
        pin6: "net.N8",
        pin4: "net.N9",
        pin8: "net.N11",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={2.5}
      pcbY={12.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
