/** Randomly generated circuit 285. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="58.16mm"
    height="56.76mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={6.1}
      pcbY={-19.56}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N20",
        pin1: "net.N28",
        pin3: "net.N37",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={5.06}
      pcbY={-11.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N31",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-13.95}
      pcbY={3.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N37",
      }}
    />
    <chip
      name="chip-1"
      footprint="qfp32"
      pcbX={22.18}
      pcbY={8.32}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin24: "net.N3",
        pin4: "net.N3",
        pin7: "net.N3",
        pin6: "net.N5",
        pin16: "net.N6",
        pin20: "net.N7",
        pin23: "net.N10",
        pin12: "net.N11",
        pin10: "net.N11",
        pin27: "net.N11",
        pin32: "net.N12",
        pin2: "net.N13",
        pin25: "net.N14",
        pin22: "net.N14",
        pin15: "net.N15",
        pin28: "net.N15",
        pin8: "net.N16",
        pin3: "net.N17",
        pin13: "net.N18",
        pin1: "net.N21",
        pin18: "net.N21",
        pin26: "net.N25",
        pin14: "net.N25",
        pin17: "net.N29",
        pin5: "net.N29",
        pin11: "net.N31",
        pin19: "net.N32",
        pin21: "net.N32",
        pin29: "net.N32",
        pin31: "net.N33",
        pin30: "net.N35",
        pin9: "net.N37",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="ssop16"
      pcbX={21.93}
      pcbY={-5.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin7: "net.N10",
        pin3: "net.N16",
        pin2: "net.N16",
        pin6: "net.N16",
        pin8: "net.N18",
        pin11: "net.N19",
        pin14: "net.N22",
        pin10: "net.N23",
        pin1: "net.N23",
        pin5: "net.N25",
        pin9: "net.N29",
        pin16: "net.N30",
        pin12: "net.N31",
        pin15: "net.N33",
        pin13: "net.N33",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={20.98}
      pcbY={22.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={11.72}
      pcbY={-4.2}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N28",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={5.97}
      pcbY={14.8}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N27",
        pin1: "net.N34",
      }}
      resistance="1k"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={14.34}
      pcbY={19.94}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }}
    />
    <diode
      name="diode-5"
      footprint="axial_p0.2in"
      pcbX={-3.45}
      pcbY={-22.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N36",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod123"
      pcbX={-3.2}
      pcbY={-4.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N24",
      }}
    />
    <resistor
      name="resistor-3"
      footprint="2512"
      pcbX={21.22}
      pcbY={-19.56}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N24",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-21.55}
      pcbY={13.46}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
        pin3: "net.N11",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={-22.32}
      pcbY={-4.78}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N17",
        pin1: "net.N34",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-21.52}
      pcbY={-24.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin3: "net.N25",
        pin2: "net.N27",
        pin4: "net.N30",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-4"
      footprint="axial_p0.2in"
      pcbX={8.04}
      pcbY={0.12}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <diode
      name="diode-7"
      footprint="sod323"
      pcbX={-2.84}
      pcbY={21.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="2512"
      pcbX={-13.16}
      pcbY={12.42}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N35",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-4.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N35",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-8"
      footprint="axial_p0.2in"
      pcbX={-14.05}
      pcbY={-3.52}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N24",
        pin1: "net.N30",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="2512"
      pcbX={-23.99}
      pcbY={-14.24}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N22",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-5"
      footprint="axial_p0.2in"
      pcbX={4.23}
      pcbY={8.23}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={-18.98}
      pcbY={23.02}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin3: "net.N12",
        pin6: "net.N14",
        pin5: "net.N14",
        pin1: "net.N34",
        pin4: "net.N36",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-13.51}
      pcbY={-17.58}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N36",
        pin3: "net.N37",
      }}
      type="pnp"
    />
    <resistor
      name="resistor-6"
      footprint="axial_p0.2in"
      pcbX={14.46}
      pcbY={-19.93}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N26",
        pin1: "net.N32",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-4.0}
      pcbY={2.22}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
        pin3: "net.N21",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-22.49}
      pcbY={4.13}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N26",
        pin2: "net.N28",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-9"
      footprint="sod323"
      pcbX={-3.23}
      pcbY={14.15}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N30",
      }}
    />
    <diode
      name="diode-10"
      footprint="sod123"
      pcbX={4.0}
      pcbY={-5.7}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N20",
      }}
    />
  </board>
)
