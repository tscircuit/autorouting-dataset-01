/** Randomly generated circuit 121. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="56.70mm"
    height="56.70mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-1.875}
      pcbY={9.375}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={7.5}
      pcbY={13.125}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-18.75}
      pcbY={13.125}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={5.625}
      pcbY={20.625}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-13.125}
      pcbY={1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={0.0}
      pcbY={1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-20.625}
      pcbY={5.625}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N7",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={9.375}
      pcbY={-1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N7",
      }}
      type="bjt"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-5.625}
      pcbY={-9.375}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin4: "net.N6",
        pin3: "net.N7",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-15.0}
      pcbY={-16.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin2: "net.N4",
        pin1: "net.N8",
        pin3: "net.N10",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={11.25}
      pcbY={-9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin3: "net.N2",
        pin5: "net.N3",
        pin1: "net.N6",
        pin6: "net.N10",
        pin2: "net.N10",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
