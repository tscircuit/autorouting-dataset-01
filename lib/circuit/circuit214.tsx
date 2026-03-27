/** Randomly generated circuit 214. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="46.24mm"
    height="38.59mm"
  >
    <chip
      name="chip-1"
      footprint="bga64"
      pcbX={4.82}
      pcbY={13.31}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N1",
        pin34: "net.N2",
        pin16: "net.N2",
        pin15: "net.N4",
        pin56: "net.N4",
        pin52: "net.N5",
        pin33: "net.N5",
        pin4: "net.N5",
        pin23: "net.N6",
        pin59: "net.N7",
        pin17: "net.N7",
        pin51: "net.N8",
        pin3: "net.N8",
        pin63: "net.N9",
        pin42: "net.N9",
        pin18: "net.N9",
        pin8: "net.N10",
        pin49: "net.N10",
        pin2: "net.N11",
        pin58: "net.N11",
        pin57: "net.N11",
        pin50: "net.N11",
        pin22: "net.N12",
        pin62: "net.N13",
        pin44: "net.N13",
        pin30: "net.N14",
        pin37: "net.N14",
        pin64: "net.N17",
        pin46: "net.N18",
        pin19: "net.N19",
        pin9: "net.N19",
        pin32: "net.N20",
        pin25: "net.N20",
        pin39: "net.N20",
        pin38: "net.N20",
        pin10: "net.N21",
        pin28: "net.N22",
        pin48: "net.N23",
        pin31: "net.N24",
        pin27: "net.N24",
        pin53: "net.N25",
        pin40: "net.N25",
        pin45: "net.N26",
        pin36: "net.N26",
        pin11: "net.N27",
        pin54: "net.N27",
        pin43: "net.N28",
        pin60: "net.N28",
        pin20: "net.N29",
        pin6: "net.N29",
        pin29: "net.N30",
        pin1: "net.N31",
        pin35: "net.N32",
        pin55: "net.N32",
        pin61: "net.N32",
        pin12: "net.N33",
        pin26: "net.N33",
        pin13: "net.N33",
        pin41: "net.N33",
        pin14: "net.N34",
        pin21: "net.N34",
        pin24: "net.N35",
        pin5: "net.N36",
        pin47: "net.N36",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={-3.71}
      pcbY={1.99}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N23",
        pin1: "net.N36",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-4.76}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={17.47}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin8: "net.N6",
        pin15: "net.N7",
        pin11: "net.N8",
        pin7: "net.N10",
        pin16: "net.N13",
        pin3: "net.N15",
        pin2: "net.N17",
        pin9: "net.N21",
        pin5: "net.N22",
        pin6: "net.N23",
        pin12: "net.N25",
        pin13: "net.N27",
        pin14: "net.N29",
        pin1: "net.N31",
        pin10: "net.N35",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-13.54}
      pcbY={-3.92}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N15",
        pin1: "net.N15",
        pin3: "net.N16",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={16.15}
      pcbY={14.27}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-4.28}
      pcbY={-11.83}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N35",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={16.64}
      pcbY={-14.05}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin1: "net.N21",
        pin2: "net.N22",
      }}
      type="jfet"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-6.53}
      pcbY={11.05}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-14.55}
      pcbY={4.42}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N26",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={5.34}
      pcbY={-5.59}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={6.74}
      pcbY={-13.3}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-15.71}
      pcbY={13.74}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin2: "net.N7",
        pin1: "net.N10",
      }}
      type="bjt"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={-14.72}
      pcbY={-13.25}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N27",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={4.21}
      pcbY={3.29}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N30",
      }}
      capacitance="0.1uF"
    />
  </board>
)
