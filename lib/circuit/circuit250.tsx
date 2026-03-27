/** Randomly generated circuit 250. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.81mm"
    height="40.27mm"
  >
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-3.42}
      pcbY={-4.67}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N26",
        pin2: "net.N31",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="axial_p0.2in"
      pcbX={-5.28}
      pcbY={12.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N23",
        pin1: "net.N31",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={15.27}
      pcbY={5.29}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N33",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-17.04}
      pcbY={1.4}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N26",
        pin2: "net.N29",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={5.14}
      pcbY={5.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N11",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={16.41}
      pcbY={13.01}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N29",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={3.23}
      pcbY={-4.92}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N25",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={15.24}
      pcbY={-3.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
        pin3: "net.N14",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={5.75}
      pcbY={13.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={9.46}
      pcbY={-12.37}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N10",
        pin1: "net.N20",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="tqfp48"
      pcbX={-14.03}
      pcbY={-11.76}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin15: "net.N1",
        pin22: "net.N1",
        pin32: "net.N1",
        pin23: "net.N1",
        pin45: "net.N2",
        pin21: "net.N2",
        pin31: "net.N3",
        pin47: "net.N3",
        pin20: "net.N4",
        pin43: "net.N5",
        pin19: "net.N6",
        pin14: "net.N7",
        pin24: "net.N8",
        pin39: "net.N9",
        pin40: "net.N9",
        pin13: "net.N11",
        pin6: "net.N12",
        pin27: "net.N12",
        pin3: "net.N13",
        pin34: "net.N15",
        pin17: "net.N16",
        pin9: "net.N16",
        pin12: "net.N16",
        pin36: "net.N17",
        pin42: "net.N17",
        pin25: "net.N18",
        pin18: "net.N18",
        pin2: "net.N20",
        pin10: "net.N22",
        pin4: "net.N22",
        pin30: "net.N23",
        pin8: "net.N24",
        pin16: "net.N25",
        pin7: "net.N25",
        pin46: "net.N26",
        pin33: "net.N26",
        pin1: "net.N27",
        pin29: "net.N28",
        pin28: "net.N28",
        pin35: "net.N28",
        pin44: "net.N28",
        pin26: "net.N30",
        pin11: "net.N30",
        pin48: "net.N30",
        pin41: "net.N31",
        pin38: "net.N32",
        pin37: "net.N32",
        pin5: "net.N33",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={17.24}
      pcbY={-13.94}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N24",
        pin2: "net.N33",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-14.32}
      pcbY={15.11}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-16.29}
      pcbY={9.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin3: "net.N21",
        pin1: "net.N31",
      }}
      type="npn"
    />
    <resistor
      name="resistor-3"
      footprint="2512"
      pcbX={1.48}
      pcbY={-12.22}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N20",
      }}
      resistance="1k"
    />
    <chip
      name="chip-2"
      footprint="qfn16"
      pcbX={-5.58}
      pcbY={4.33}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N7",
        pin6: "net.N9",
        pin7: "net.N10",
        pin11: "net.N10",
        pin16: "net.N10",
        pin9: "net.N11",
        pin15: "net.N12",
        pin8: "net.N13",
        pin5: "net.N15",
        pin3: "net.N19",
        pin10: "net.N21",
        pin13: "net.N25",
        pin14: "net.N27",
        pin1: "net.N29",
        pin12: "net.N32",
        pin2: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
