/** Randomly generated circuit 219. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="47.92mm"
    height="42.61mm"
  >
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-7.21}
      pcbY={17.29}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N18",
      }}
    />
    <chip
      name="chip-1"
      footprint="tqfp48"
      pcbX={-15.59}
      pcbY={4.21}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin11: "net.N1",
        pin34: "net.N1",
        pin48: "net.N2",
        pin33: "net.N2",
        pin7: "net.N2",
        pin46: "net.N3",
        pin35: "net.N3",
        pin30: "net.N3",
        pin47: "net.N4",
        pin17: "net.N4",
        pin3: "net.N5",
        pin16: "net.N6",
        pin40: "net.N7",
        pin28: "net.N8",
        pin31: "net.N9",
        pin25: "net.N9",
        pin41: "net.N11",
        pin37: "net.N11",
        pin43: "net.N12",
        pin23: "net.N12",
        pin18: "net.N13",
        pin10: "net.N14",
        pin14: "net.N14",
        pin12: "net.N15",
        pin39: "net.N15",
        pin45: "net.N16",
        pin20: "net.N16",
        pin22: "net.N17",
        pin9: "net.N18",
        pin2: "net.N19",
        pin4: "net.N19",
        pin6: "net.N19",
        pin1: "net.N20",
        pin24: "net.N21",
        pin42: "net.N21",
        pin15: "net.N22",
        pin5: "net.N22",
        pin32: "net.N22",
        pin27: "net.N23",
        pin19: "net.N24",
        pin13: "net.N24",
        pin26: "net.N25",
        pin36: "net.N25",
        pin38: "net.N25",
        pin29: "net.N25",
        pin44: "net.N26",
        pin8: "net.N26",
        pin21: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={7.85}
      pcbY={3.42}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={8.49}
      pcbY={-2.83}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={17.16}
      pcbY={-6.07}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-0.98}
      pcbY={-2.66}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={3.9}
      pcbY={13.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={13.49}
      pcbY={8.41}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N8",
        pin4: "net.N9",
        pin6: "net.N10",
        pin2: "net.N18",
        pin3: "net.N21",
        pin1: "net.N27",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="2512"
      pcbX={-17.39}
      pcbY={16.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N26",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-0.86}
      pcbY={6.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N27",
      }}
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={15.07}
      pcbY={14.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N23",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-4.47}
      pcbY={-14.77}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N13",
        pin2: "net.N27",
      }}
      type="bjt"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-14.16}
      pcbY={-16.32}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N13",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={-17.18}
      pcbY={-9.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={8.05}
      pcbY={-11.39}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin3: "net.N15",
        pin2: "net.N16",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={13.42}
      pcbY={-17.46}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N20",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
