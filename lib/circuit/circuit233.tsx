/** Randomly generated circuit 233. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="54.63mm"
    height="51.29mm"
  >
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-1.87}
      pcbY={11.47}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-20.7}
      pcbY={3.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-12.45}
      pcbY={4.66}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N10",
        pin1: "net.N31",
      }}
      type="pnp"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={4.68}
      pcbY={-3.79}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N32",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={21.76}
      pcbY={-4.49}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N16",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-15.67}
      pcbY={12.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin3: "net.N3",
        pin5: "net.N6",
        pin1: "net.N9",
        pin2: "net.N19",
        pin4: "net.N30",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={13.5}
      pcbY={-11.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N30",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={-3.27}
      pcbY={2.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N28",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={21.62}
      pcbY={-11.17}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={-20.05}
      pcbY={-18.57}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-20.31}
      pcbY={-10.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N30",
      }}
    />
    <resistor
      name="resistor-4"
      footprint="1210"
      pcbX={6.84}
      pcbY={18.05}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N27",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={-3.34}
      pcbY={-19.16}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N18",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={13.31}
      pcbY={-19.96}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N23",
      }}
    />
    <resistor
      name="resistor-5"
      footprint="axial_p0.2in"
      pcbX={19.6}
      pcbY={12.09}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N28",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0805"
      pcbX={11.31}
      pcbY={12.83}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={19.36}
      pcbY={-19.16}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N16",
        pin2: "net.N20",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-3.12}
      pcbY={21.34}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N13",
        pin3: "net.N29",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="bga32"
      pcbX={-7.76}
      pcbY={-7.7}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin21: "net.N3",
        pin10: "net.N4",
        pin19: "net.N5",
        pin8: "net.N5",
        pin11: "net.N7",
        pin9: "net.N9",
        pin14: "net.N10",
        pin4: "net.N10",
        pin16: "net.N11",
        pin15: "net.N14",
        pin24: "net.N15",
        pin29: "net.N15",
        pin17: "net.N17",
        pin20: "net.N17",
        pin12: "net.N18",
        pin7: "net.N18",
        pin28: "net.N19",
        pin30: "net.N20",
        pin26: "net.N20",
        pin13: "net.N21",
        pin22: "net.N22",
        pin2: "net.N24",
        pin27: "net.N25",
        pin18: "net.N26",
        pin25: "net.N27",
        pin6: "net.N29",
        pin31: "net.N29",
        pin23: "net.N30",
        pin32: "net.N31",
        pin5: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-3"
      footprint="1210"
      pcbX={-19.66}
      pcbY={-3.73}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N26",
        pin2: "net.N27",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-13.7}
      pcbY={19.32}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N13",
        pin3: "net.N14",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={19.72}
      pcbY={2.69}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={14.96}
      pcbY={-3.93}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-7"
      footprint="0603"
      pcbX={21.03}
      pcbY={18.23}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-10.75}
      pcbY={-19.13}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-8"
      footprint="2512"
      pcbX={12.34}
      pcbY={2.88}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N20",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={5.16}
      pcbY={-11.58}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={3.06}
      pcbY={-19.26}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N25",
      }}
    />
  </board>
)
