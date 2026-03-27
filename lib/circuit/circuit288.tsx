/** Randomly generated circuit 288. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.78mm"
    height="38.81mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-4.55}
      pcbY={13.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N16",
        pin3: "net.N18",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-4.59}
      pcbY={-4.2}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin4: "net.N18",
        pin3: "net.N19",
        pin1: "net.N23",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={4.79}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="qfn32"
      pcbX={-15.26}
      pcbY={-3.9}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin17: "net.N1",
        pin7: "net.N4",
        pin28: "net.N5",
        pin25: "net.N5",
        pin23: "net.N7",
        pin13: "net.N7",
        pin24: "net.N8",
        pin6: "net.N8",
        pin10: "net.N10",
        pin9: "net.N11",
        pin4: "net.N12",
        pin21: "net.N13",
        pin3: "net.N13",
        pin15: "net.N14",
        pin8: "net.N14",
        pin29: "net.N15",
        pin22: "net.N15",
        pin14: "net.N16",
        pin18: "net.N17",
        pin16: "net.N19",
        pin20: "net.N20",
        pin30: "net.N21",
        pin27: "net.N22",
        pin31: "net.N24",
        pin19: "net.N25",
        pin26: "net.N25",
        pin32: "net.N25",
        pin5: "net.N26",
        pin11: "net.N27",
        pin12: "net.N27",
        pin1: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={4.74}
      pcbY={-3.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-14.38}
      pcbY={-14.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin1: "net.N20",
        pin2: "net.N22",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={5.75}
      pcbY={4.69}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N25",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-15.62}
      pcbY={5.26}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N22",
        pin1: "net.N26",
      }}
      resistance="1k"
    />
    <chip
      name="chip-2"
      footprint="qfn16"
      pcbX={15.95}
      pcbY={12.13}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin8: "net.N4",
        pin4: "net.N6",
        pin3: "net.N9",
        pin16: "net.N12",
        pin6: "net.N13",
        pin14: "net.N14",
        pin12: "net.N16",
        pin7: "net.N16",
        pin13: "net.N17",
        pin11: "net.N17",
        pin10: "net.N23",
        pin5: "net.N23",
        pin9: "net.N24",
        pin15: "net.N24",
        pin1: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={14.23}
      pcbY={-12.73}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={16.2}
      pcbY={-4.38}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={6.73}
      pcbY={11.93}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin3: "net.N8",
        pin1: "net.N11",
        pin2: "net.N21",
      }}
      type="mosfet"
    />
    <inductor
      name="inductor-3"
      footprint="1210"
      pcbX={-14.35}
      pcbY={10.87}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={13.86}
      pcbY={2.43}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-5.88}
      pcbY={6.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-5.76}
      pcbY={-15.11}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin3: "net.N14",
        pin1: "net.N18",
      }}
      type="mosfet"
    />
  </board>
)
