/** Randomly generated circuit 271. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="41.02mm"
    height="44.41mm"
  >
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={-12.94}
      pcbY={-6.67}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={-4.79}
      pcbY={18.49}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={4.42}
      pcbY={14.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin3: "net.N8",
        pin2: "net.N11",
      }}
      type="bjt"
    />
    <resistor
      name="resistor-3"
      footprint="2512"
      pcbX={-5.79}
      pcbY={3.58}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={5.92}
      pcbY={6.02}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={3.87}
      pcbY={-4.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-15.04}
      pcbY={-15.04}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={-3.75}
      pcbY={-13.52}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0603"
      pcbX={5.06}
      pcbY={-14.53}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-7"
      footprint="2512"
      pcbX={-13.14}
      pcbY={13.62}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={14.11}
      pcbY={-13.51}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N4",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={14.72}
      pcbY={-4.17}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
        pin3: "net.N10",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={13.98}
      pcbY={13.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="1206"
      pcbX={-14.86}
      pcbY={5.19}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={13.3}
      pcbY={3.51}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }}
    />
  </board>
)
