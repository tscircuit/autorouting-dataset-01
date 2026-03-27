/** Randomly generated circuit 264. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="47.42mm"
    height="49.21mm"
  >
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={6.9}
      pcbY={-0.75}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N19",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-18.84}
      pcbY={1.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N26",
        pin1: "net.N35",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-0.0}
      pcbY={-0.64}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin2: "net.N17",
        pin1: "net.N31",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={18.39}
      pcbY={-0.85}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin6: "net.N3",
        pin5: "net.N9",
        pin2: "net.N16",
        pin4: "net.N18",
        pin8: "net.N24",
        pin7: "net.N28",
        pin1: "net.N32",
        pin3: "net.N35",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={7.57}
      pcbY={6.43}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-1.64}
      pcbY={17.07}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N20",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-0.65}
      pcbY={9.72}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-2.73}
      pcbY={-8.15}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N29",
        pin1: "net.N32",
        pin2: "net.N34",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={6.26}
      pcbY={19.8}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin3: "net.N22",
        pin1: "net.N33",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={0.19}
      pcbY={-18.03}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N18",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={17.14}
      pcbY={17.91}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N29",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="axial_p0.2in"
      pcbX={-17.18}
      pcbY={-18.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-8.76}
      pcbY={17.62}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N32",
      }}
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={-9.23}
      pcbY={-17.59}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-16.96}
      pcbY={-8.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <chip
      name="chip-2"
      footprint="bga64"
      pcbX={9.07}
      pcbY={-11.35}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin24: "net.N1",
        pin19: "net.N1",
        pin38: "net.N2",
        pin23: "net.N3",
        pin36: "net.N5",
        pin35: "net.N5",
        pin27: "net.N5",
        pin40: "net.N6",
        pin55: "net.N7",
        pin58: "net.N7",
        pin26: "net.N8",
        pin15: "net.N10",
        pin64: "net.N10",
        pin39: "net.N12",
        pin33: "net.N12",
        pin5: "net.N13",
        pin22: "net.N13",
        pin25: "net.N14",
        pin43: "net.N14",
        pin52: "net.N14",
        pin31: "net.N15",
        pin11: "net.N15",
        pin14: "net.N15",
        pin53: "net.N17",
        pin20: "net.N17",
        pin7: "net.N17",
        pin44: "net.N18",
        pin1: "net.N18",
        pin62: "net.N19",
        pin63: "net.N19",
        pin2: "net.N20",
        pin9: "net.N20",
        pin8: "net.N21",
        pin12: "net.N21",
        pin57: "net.N23",
        pin30: "net.N23",
        pin29: "net.N24",
        pin13: "net.N24",
        pin59: "net.N24",
        pin17: "net.N25",
        pin16: "net.N26",
        pin51: "net.N27",
        pin47: "net.N27",
        pin28: "net.N27",
        pin3: "net.N28",
        pin6: "net.N29",
        pin32: "net.N29",
        pin4: "net.N30",
        pin61: "net.N30",
        pin45: "net.N31",
        pin48: "net.N32",
        pin60: "net.N33",
        pin50: "net.N34",
        pin56: "net.N34",
        pin34: "net.N35",
        pin46: "net.N35",
        pin41: "net.N36",
        pin21: "net.N36",
        pin49: "net.N36",
        pin10: "net.N37",
        pin37: "net.N37",
        pin18: "net.N37",
        pin54: "net.N38",
        pin42: "net.N38",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-5"
      footprint="1210"
      pcbX={19.39}
      pcbY={-11.53}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N20",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-16.71}
      pcbY={16.23}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={-9.22}
      pcbY={-0.46}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N16",
        pin2: "net.N36",
      }}
      type="jfet"
    />
    <inductor
      name="inductor-6"
      footprint="0603"
      pcbX={15.05}
      pcbY={-19.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={-9.13}
      pcbY={-8.23}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N33",
      }}
    />
    <resistor
      name="resistor-3"
      footprint="2512"
      pcbX={-8.93}
      pcbY={7.43}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N30",
        pin1: "net.N38",
      }}
      resistance="1k"
    />
    <diode
      name="diode-6"
      footprint="axial_p0.2in"
      pcbX={16.5}
      pcbY={10.52}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N30",
        pin1: "net.N31",
      }}
    />
  </board>
)
