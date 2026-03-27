/** Randomly generated circuit 296. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.58mm"
    height="41.02mm"
  >
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={-15.43}
      pcbY={13.16}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={18.11}
      pcbY={3.94}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={-16.55}
      pcbY={-4.77}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={4.68}
      pcbY={-14.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
        pin3: "net.N12",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-3.97}
      pcbY={-14.89}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N10",
        pin3: "net.N12",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={11.56}
      pcbY={-7.36}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-14.76}
      pcbY={-13.33}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N4",
        pin4: "net.N5",
        pin1: "net.N8",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={16.02}
      pcbY={12.96}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-4.15}
      pcbY={-8.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={14.75}
      pcbY={-14.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="1210"
      pcbX={-17.55}
      pcbY={2.66}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={4.33}
      pcbY={1.72}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N5",
        pin5: "net.N6",
        pin4: "net.N9",
        pin6: "net.N9",
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-3"
      footprint="1206"
      pcbX={-6.65}
      pcbY={2.11}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-4.41}
      pcbY={12.75}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={5.51}
      pcbY={13.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin2: "net.N7",
        pin1: "net.N7",
      }}
      type="jfet"
    />
  </board>
)
