/** Randomly generated circuit 298. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="47.24mm"
    height="37.49mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={6.82}
      pcbY={4.02}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin1: "net.N12",
        pin2: "net.N12",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="axial_p0.2in"
      pcbX={-14.42}
      pcbY={-10.71}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-4.37}
      pcbY={-4.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin6: "net.N6",
        pin2: "net.N6",
        pin1: "net.N7",
        pin4: "net.N11",
        pin3: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={9.21}
      pcbY={-5.08}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={17.05}
      pcbY={-12.96}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="1210"
      pcbX={5.18}
      pcbY={13.65}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={16.79}
      pcbY={-3.9}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={16.1}
      pcbY={11.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="2512"
      pcbX={-17.05}
      pcbY={-5.33}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-6.04}
      pcbY={7.87}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
        pin3: "net.N7",
        pin4: "net.N9",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={16.93}
      pcbY={2.47}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={2.9}
      pcbY={-14.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin2: "net.N4",
        pin1: "net.N10",
        pin3: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-5.06}
      pcbY={-9.9}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }}
    />
    <inductor
      name="inductor-5"
      footprint="1206"
      pcbX={-13.16}
      pcbY={4.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-15.37}
      pcbY={11.07}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
