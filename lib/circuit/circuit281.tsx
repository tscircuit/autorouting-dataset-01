/** Randomly generated circuit 281. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="53.45mm"
    height="51.63mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={21.24}
      pcbY={-1.44}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N7",
        pin1: "net.N21",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={3.45}
      pcbY={-12.49}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={20.74}
      pcbY={18.9}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={-11.15}
      pcbY={-12.41}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N21",
        pin1: "net.N29",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-20.26}
      pcbY={10.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-2.81}
      pcbY={-20.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N24",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={-19.43}
      pcbY={-19.14}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={12.42}
      pcbY={14.39}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N22",
      }}
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={21.43}
      pcbY={-9.03}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="2512"
      pcbX={-10.76}
      pcbY={18.89}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-11.35}
      pcbY={9.94}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N20",
        pin1: "net.N26",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={14.43}
      pcbY={-22.07}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N11",
        pin3: "net.N17",
        pin4: "net.N28",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-21.64}
      pcbY={19.65}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N17",
        pin3: "net.N20",
      }}
      type="bjt"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={1.6}
      pcbY={1.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N28",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-11.02}
      pcbY={-18.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin3: "net.N14",
        pin1: "net.N19",
      }}
      type="pnp"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={3.01}
      pcbY={11.51}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N16",
      }}
    />
    <resistor
      name="resistor-6"
      footprint="1210"
      pcbX={-2.69}
      pcbY={5.41}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-21.82}
      pcbY={-3.16}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={20.57}
      pcbY={-14.56}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={10.96}
      pcbY={-6.32}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N14",
        pin3: "net.N21",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={11.23}
      pcbY={-14.42}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N5",
        pin2: "net.N28",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={12.53}
      pcbY={21.49}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N22",
        pin1: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-1.69}
      pcbY={19.44}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N25",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-5"
      footprint="0805"
      pcbX={5.22}
      pcbY={19.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N23",
        pin1: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-3.45}
      pcbY={10.97}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N24",
        pin1: "net.N26",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={-21.48}
      pcbY={4.65}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N27",
      }}
    />
    <chip
      name="chip-1"
      footprint="qfn16"
      pcbX={13.03}
      pcbY={3.89}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin7: "net.N6",
        pin4: "net.N9",
        pin10: "net.N10",
        pin12: "net.N11",
        pin16: "net.N13",
        pin6: "net.N15",
        pin13: "net.N15",
        pin5: "net.N17",
        pin11: "net.N17",
        pin14: "net.N18",
        pin9: "net.N19",
        pin15: "net.N20",
        pin3: "net.N25",
        pin1: "net.N29",
        pin8: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-11.46}
      pcbY={-2.67}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin4: "net.N9",
        pin2: "net.N15",
        pin3: "net.N22",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-6"
      footprint="0805"
      pcbX={-1.69}
      pcbY={-11.12}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin2: "net.N27",
      }}
      capacitance="0.1uF"
    />
  </board>
)
