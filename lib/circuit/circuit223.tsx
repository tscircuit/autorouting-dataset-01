/** Randomly generated circuit 223. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="37.17mm"
    height="41.04mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-2.72}
      pcbY={13.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={12.01}
      pcbY={5.78}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={0.41}
      pcbY={3.78}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={5.47}
      pcbY={-14.56}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin2: "net.N5",
        pin1: "net.N13",
      }}
      type="bjt"
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={-11.0}
      pcbY={3.86}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N12",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={12.23}
      pcbY={14.94}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N18",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-5.39}
      pcbY={6.09}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={3.75}
      pcbY={13.93}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="1206"
      pcbX={-13.71}
      pcbY={-13.87}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={-3.59}
      pcbY={-14.47}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N18",
      }}
    />
    <chip
      name="chip-1"
      footprint="ssop8"
      pcbX={12.99}
      pcbY={-3.08}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin7: "net.N3",
        pin8: "net.N3",
        pin2: "net.N7",
        pin4: "net.N13",
        pin3: "net.N16",
        pin6: "net.N16",
        pin5: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="qfn16"
      pcbX={-11.85}
      pcbY={14.07}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
        pin13: "net.N4",
        pin12: "net.N4",
        pin4: "net.N5",
        pin16: "net.N6",
        pin7: "net.N7",
        pin11: "net.N7",
        pin6: "net.N7",
        pin14: "net.N9",
        pin3: "net.N10",
        pin15: "net.N11",
        pin8: "net.N12",
        pin9: "net.N14",
        pin5: "net.N15",
        pin10: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-0.97}
      pcbY={-0.78}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N8",
        pin1: "net.N8",
        pin3: "net.N10",
        pin2: "net.N13",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-5"
      footprint="1206"
      pcbX={-13.56}
      pcbY={-3.22}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={13.07}
      pcbY={-15.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N14",
        pin1: "net.N18",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.95}
      pcbY={-6.23}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N17",
      }}
      resistance="1k"
    />
  </board>
)
