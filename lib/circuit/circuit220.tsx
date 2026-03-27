/** Randomly generated circuit 220. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="52.38mm"
    height="43.26mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-18.9}
      pcbY={8.17}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N18",
        pin3: "net.N24",
      }}
      type="pnp"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={18.97}
      pcbY={-17.28}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N21",
      }}
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={19.11}
      pcbY={-5.69}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N15",
        pin2: "net.N21",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={17.49}
      pcbY={12.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={8.79}
      pcbY={-16.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="axial_p0.2in"
      pcbX={0.64}
      pcbY={-0.51}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-1"
      footprint="tssop20"
      pcbX={20.24}
      pcbY={3.95}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin9: "net.N1",
        pin19: "net.N4",
        pin15: "net.N5",
        pin12: "net.N7",
        pin4: "net.N8",
        pin13: "net.N8",
        pin1: "net.N10",
        pin16: "net.N11",
        pin5: "net.N13",
        pin18: "net.N14",
        pin10: "net.N17",
        pin11: "net.N17",
        pin14: "net.N19",
        pin8: "net.N19",
        pin3: "net.N19",
        pin6: "net.N20",
        pin20: "net.N20",
        pin17: "net.N21",
        pin7: "net.N22",
        pin2: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={-20.2}
      pcbY={-16.61}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-7.92}
      pcbY={15.8}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N5",
        pin1: "net.N16",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-19.29}
      pcbY={-9.15}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={17.05}
      pcbY={15.41}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={-10.84}
      pcbY={3.74}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-21.11}
      pcbY={0.57}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin3: "net.N20",
        pin1: "net.N23",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-3"
      footprint="1206"
      pcbX={-10.37}
      pcbY={8.47}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={0.91}
      pcbY={15.94}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={-1.38}
      pcbY={-3.81}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N22",
      }}
    />
    <chip
      name="chip-2"
      footprint="dip8"
      pcbX={-5.96}
      pcbY={-14.02}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N2",
        pin5: "net.N5",
        pin3: "net.N9",
        pin2: "net.N10",
        pin4: "net.N14",
        pin8: "net.N15",
        pin1: "net.N18",
        pin6: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={7.48}
      pcbY={7.77}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={8.79}
      pcbY={15.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={-18.09}
      pcbY={15.7}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N23",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod323"
      pcbX={-11.95}
      pcbY={-2.18}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N23",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={-0.23}
      pcbY={7.22}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={9.59}
      pcbY={-0.82}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
  </board>
)
