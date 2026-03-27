/** Randomly generated circuit 293. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="47.16mm"
    height="46.26mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={4.67}
      pcbY={-17.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N29",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="1206"
      pcbX={-6.63}
      pcbY={16.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-14.7}
      pcbY={18.8}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={-13.62}
      pcbY={-16.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N22",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={3.78}
      pcbY={16.99}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={14.29}
      pcbY={9.02}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }}
    />
    <chip
      name="chip-1"
      footprint="qfn16"
      pcbX={16.28}
      pcbY={-4.08}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N1",
        pin4: "net.N6",
        pin8: "net.N6",
        pin12: "net.N7",
        pin7: "net.N9",
        pin16: "net.N11",
        pin2: "net.N12",
        pin9: "net.N14",
        pin6: "net.N15",
        pin15: "net.N27",
        pin5: "net.N27",
        pin14: "net.N28",
        pin13: "net.N29",
        pin11: "net.N32",
        pin10: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-4.92}
      pcbY={-9.03}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N4",
        pin1: "net.N10",
        pin4: "net.N32",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-1.03}
      pcbY={3.06}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N19",
        pin3: "net.N26",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={12.88}
      pcbY={4.57}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin4: "net.N7",
        pin5: "net.N10",
        pin3: "net.N21",
        pin1: "net.N24",
        pin6: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={5.58}
      pcbY={-5.33}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin3: "net.N21",
        pin2: "net.N21",
        pin1: "net.N24",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={14.53}
      pcbY={17.6}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-4.12}
      pcbY={-15.81}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N29",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={17.56}
      pcbY={-16.55}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-2"
      footprint="tqfp48"
      pcbX={-15.2}
      pcbY={4.1}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin39: "net.N1",
        pin10: "net.N3",
        pin43: "net.N4",
        pin3: "net.N4",
        pin6: "net.N5",
        pin14: "net.N5",
        pin31: "net.N6",
        pin45: "net.N6",
        pin21: "net.N7",
        pin30: "net.N8",
        pin23: "net.N8",
        pin32: "net.N9",
        pin8: "net.N10",
        pin12: "net.N11",
        pin17: "net.N13",
        pin1: "net.N13",
        pin16: "net.N13",
        pin46: "net.N14",
        pin13: "net.N14",
        pin44: "net.N15",
        pin37: "net.N15",
        pin19: "net.N16",
        pin26: "net.N17",
        pin47: "net.N18",
        pin25: "net.N18",
        pin22: "net.N19",
        pin24: "net.N20",
        pin11: "net.N21",
        pin40: "net.N22",
        pin28: "net.N22",
        pin36: "net.N23",
        pin33: "net.N23",
        pin15: "net.N23",
        pin2: "net.N24",
        pin38: "net.N25",
        pin9: "net.N25",
        pin41: "net.N26",
        pin20: "net.N26",
        pin48: "net.N26",
        pin18: "net.N27",
        pin35: "net.N28",
        pin7: "net.N29",
        pin42: "net.N30",
        pin5: "net.N30",
        pin4: "net.N30",
        pin27: "net.N31",
        pin34: "net.N32",
        pin29: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-4"
      footprint="1210"
      pcbX={-15.81}
      pcbY={-7.31}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N20",
        pin1: "net.N31",
      }}
      capacitance="0.1uF"
    />
  </board>
)
