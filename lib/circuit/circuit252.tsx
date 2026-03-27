/** Randomly generated circuit 252. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.00mm"
    height="39.25mm"
  >
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={5.59}
      pcbY={3.01}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={13.92}
      pcbY={5.41}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin3: "net.N6",
        pin1: "net.N8",
        pin2: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-15.93}
      pcbY={4.73}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-0.73}
      pcbY={-15.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-9.25}
      pcbY={-9.53}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin4: "net.N2",
        pin2: "net.N3",
        pin3: "net.N6",
        pin6: "net.N9",
        pin5: "net.N11",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-16.95}
      pcbY={11.37}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
        pin3: "net.N13",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={12.4}
      pcbY={-13.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin6: "net.N9",
        pin3: "net.N11",
        pin5: "net.N13",
        pin1: "net.N14",
        pin4: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-5.28}
      pcbY={4.02}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={6.49}
      pcbY={-5.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={13.83}
      pcbY={15.3}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow4"
      pcbX={-5.57}
      pcbY={9.49}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N5",
        pin1: "net.N6",
        pin2: "net.N11",
        pin4: "net.N13",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinrow2"
      pcbX={-3.74}
      pcbY={-4.71}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-14.82}
      pcbY={-2.51}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N6",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-16.82}
      pcbY={-14.2}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin2: "net.N14",
        pin1: "net.N15",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={3.36}
      pcbY={13.47}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
  </board>
)
