/** Randomly generated circuit 202. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="50.58mm"
    height="44.16mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={18.33}
      pcbY={-6.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N5",
        pin1: "net.N21",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={3.27}
      pcbY={-7.46}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin3: "net.N9",
        pin1: "net.N10",
        pin4: "net.N17",
        pin6: "net.N21",
        pin2: "net.N24",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={11.78}
      pcbY={-11.98}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N9",
        pin2: "net.N9",
        pin1: "net.N13",
        pin6: "net.N20",
        pin4: "net.N23",
        pin5: "net.N23",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-4.09}
      pcbY={14.27}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N28",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-4.86}
      pcbY={-12.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N27",
      }}
    />
    <chip
      name="chip-1"
      footprint="tqfp48"
      pcbX={16.91}
      pcbY={13.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin9: "net.N1",
        pin3: "net.N2",
        pin23: "net.N2",
        pin20: "net.N2",
        pin8: "net.N3",
        pin19: "net.N3",
        pin24: "net.N4",
        pin7: "net.N4",
        pin29: "net.N5",
        pin48: "net.N5",
        pin13: "net.N5",
        pin21: "net.N6",
        pin47: "net.N8",
        pin1: "net.N8",
        pin42: "net.N8",
        pin30: "net.N9",
        pin11: "net.N10",
        pin17: "net.N11",
        pin36: "net.N11",
        pin39: "net.N11",
        pin37: "net.N12",
        pin2: "net.N13",
        pin32: "net.N14",
        pin5: "net.N15",
        pin41: "net.N15",
        pin34: "net.N16",
        pin38: "net.N16",
        pin46: "net.N17",
        pin10: "net.N18",
        pin43: "net.N19",
        pin14: "net.N20",
        pin25: "net.N20",
        pin12: "net.N21",
        pin35: "net.N23",
        pin4: "net.N24",
        pin16: "net.N25",
        pin27: "net.N26",
        pin22: "net.N26",
        pin44: "net.N26",
        pin26: "net.N27",
        pin28: "net.N27",
        pin40: "net.N28",
        pin18: "net.N28",
        pin15: "net.N29",
        pin31: "net.N29",
        pin6: "net.N30",
        pin33: "net.N30",
        pin45: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={1.51}
      pcbY={5.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-7.3}
      pcbY={-4.81}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N14",
        pin3: "net.N19",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-15.4}
      pcbY={-5.25}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin2: "net.N22",
        pin1: "net.N28",
      }}
      type="bjt"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={16.63}
      pcbY={-16.23}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N22",
        pin1: "net.N24",
      }}
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-18.35}
      pcbY={-12.99}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin3: "net.N17",
        pin2: "net.N29",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-16.37}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N18",
        pin3: "net.N18",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={-18.49}
      pcbY={14.65}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={-7.54}
      pcbY={4.83}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={2.31}
      pcbY={15.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={17.86}
      pcbY={0.72}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }}
    />
  </board>
)
