/** Randomly generated circuit 256. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="46.34mm"
    height="51.02mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={-16.43}
      pcbY={11.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={3.79}
      pcbY={15.43}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N17",
        pin2: "net.N26",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={1.82}
      pcbY={21.81}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N25",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-7.34}
      pcbY={-18.17}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N13",
        pin2: "net.N23",
      }}
      type="bjt"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-16.68}
      pcbY={-9.75}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N17",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={16.93}
      pcbY={6.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-8.89}
      pcbY={16.87}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N22",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={19.04}
      pcbY={-10.19}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N19",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-13.07}
      pcbY={-1.63}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin5: "net.N5",
        pin3: "net.N7",
        pin6: "net.N8",
        pin4: "net.N20",
        pin2: "net.N20",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={7.83}
      pcbY={-18.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N14",
        pin3: "net.N18",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={0.36}
      pcbY={-2.33}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-0.8}
      pcbY={8.69}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N26",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={14.46}
      pcbY={-0.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="qfn32"
      pcbX={17.27}
      pcbY={18.14}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin21: "net.N2",
        pin30: "net.N2",
        pin22: "net.N3",
        pin11: "net.N4",
        pin32: "net.N4",
        pin1: "net.N5",
        pin31: "net.N5",
        pin23: "net.N6",
        pin12: "net.N8",
        pin24: "net.N8",
        pin15: "net.N9",
        pin2: "net.N9",
        pin18: "net.N9",
        pin4: "net.N11",
        pin3: "net.N11",
        pin9: "net.N13",
        pin25: "net.N14",
        pin6: "net.N15",
        pin27: "net.N15",
        pin29: "net.N16",
        pin14: "net.N16",
        pin10: "net.N16",
        pin16: "net.N17",
        pin28: "net.N17",
        pin19: "net.N19",
        pin13: "net.N20",
        pin20: "net.N20",
        pin7: "net.N21",
        pin5: "net.N21",
        pin26: "net.N23",
        pin17: "net.N24",
        pin8: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-14.69}
      pcbY={-18.53}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-5.53}
      pcbY={8.23}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-10.72}
      pcbY={4.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={0.99}
      pcbY={-19.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="1206"
      pcbX={6.81}
      pcbY={6.73}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={10.49}
      pcbY={-8.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin2: "net.N11",
        pin1: "net.N21",
      }}
      type="bjt"
    />
  </board>
)
