/** Randomly generated circuit 284. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="54.06mm"
    height="42.56mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-10.04}
      pcbY={0.48}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N16",
        pin1: "net.N20",
        pin2: "net.N22",
        pin4: "net.N25",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-2.6}
      pcbY={-6.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N10",
        pin2: "net.N10",
        pin1: "net.N26",
      }}
      type="bjt"
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={-12.07}
      pcbY={-14.57}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-11.09}
      pcbY={14.08}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={6.46}
      pcbY={-14.83}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-20.36}
      pcbY={8.15}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin2: "net.N17",
        pin1: "net.N18",
        pin3: "net.N24",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={6.01}
      pcbY={-7.16}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N13",
        pin3: "net.N29",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-2"
      footprint="1210"
      pcbX={-0.15}
      pcbY={14.2}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-17.59}
      pcbY={17.43}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N19",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={3.3}
      pcbY={0.84}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-11.5}
      pcbY={-8.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N21",
        pin2: "net.N22",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-1.69}
      pcbY={-14.76}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin3: "net.N11",
        pin1: "net.N15",
      }}
      type="jfet"
    />
    <resistor
      name="resistor-2"
      footprint="2512"
      pcbX={-21.33}
      pcbY={-14.71}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-20.93}
      pcbY={-1.51}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={17.82}
      pcbY={-1.28}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N20",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-3"
      footprint="1210"
      pcbX={1.56}
      pcbY={6.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={19.42}
      pcbY={-13.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N5",
        pin2: "net.N8",
        pin4: "net.N18",
        pin7: "net.N23",
        pin5: "net.N24",
        pin3: "net.N25",
        pin6: "net.N26",
        pin1: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-18.62}
      pcbY={-6.9}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N29",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={18.29}
      pcbY={5.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="bga32"
      pcbX={12.78}
      pcbY={15.2}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin30: "net.N1",
        pin22: "net.N1",
        pin28: "net.N1",
        pin2: "net.N2",
        pin18: "net.N2",
        pin31: "net.N3",
        pin10: "net.N5",
        pin16: "net.N6",
        pin17: "net.N8",
        pin23: "net.N8",
        pin29: "net.N9",
        pin15: "net.N10",
        pin21: "net.N11",
        pin26: "net.N12",
        pin13: "net.N14",
        pin20: "net.N15",
        pin24: "net.N16",
        pin27: "net.N17",
        pin6: "net.N19",
        pin25: "net.N19",
        pin12: "net.N21",
        pin7: "net.N21",
        pin32: "net.N23",
        pin19: "net.N23",
        pin11: "net.N24",
        pin3: "net.N27",
        pin5: "net.N28",
        pin4: "net.N28",
        pin9: "net.N28",
        pin14: "net.N29",
        pin8: "net.N29",
        pin1: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
