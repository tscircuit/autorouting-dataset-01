/** Randomly generated circuit 224. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="46.64mm"
    height="47.00mm"
  >
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-16.75}
      pcbY={-1.07}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N26",
        pin1: "net.N27",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={2.88}
      pcbY={-9.43}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N14",
        pin3: "net.N29",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={9.95}
      pcbY={-13.4}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin5: "net.N3",
        pin1: "net.N13",
        pin2: "net.N14",
        pin6: "net.N24",
        pin3: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={3.02}
      pcbY={18.45}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin6: "net.N4",
        pin1: "net.N9",
        pin3: "net.N23",
        pin2: "net.N24",
        pin5: "net.N28",
        pin4: "net.N30",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={6.09}
      pcbY={5.6}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N27",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={0.4}
      pcbY={11.95}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin4: "net.N14",
        pin2: "net.N21",
        pin1: "net.N24",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-10.98}
      pcbY={15.9}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin3: "net.N19",
        pin2: "net.N25",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="tqfp48"
      pcbX={-14.94}
      pcbY={-15.12}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin44: "net.N1",
        pin34: "net.N1",
        pin28: "net.N2",
        pin10: "net.N2",
        pin8: "net.N2",
        pin5: "net.N2",
        pin22: "net.N3",
        pin39: "net.N4",
        pin16: "net.N5",
        pin17: "net.N5",
        pin9: "net.N6",
        pin36: "net.N7",
        pin48: "net.N9",
        pin21: "net.N10",
        pin38: "net.N10",
        pin15: "net.N11",
        pin4: "net.N11",
        pin14: "net.N12",
        pin43: "net.N12",
        pin24: "net.N13",
        pin47: "net.N13",
        pin27: "net.N13",
        pin6: "net.N14",
        pin31: "net.N15",
        pin40: "net.N15",
        pin11: "net.N16",
        pin23: "net.N16",
        pin45: "net.N17",
        pin2: "net.N17",
        pin26: "net.N18",
        pin46: "net.N20",
        pin1: "net.N20",
        pin12: "net.N20",
        pin19: "net.N20",
        pin25: "net.N21",
        pin33: "net.N22",
        pin42: "net.N22",
        pin3: "net.N22",
        pin32: "net.N23",
        pin18: "net.N23",
        pin30: "net.N24",
        pin35: "net.N25",
        pin29: "net.N25",
        pin20: "net.N27",
        pin13: "net.N28",
        pin7: "net.N29",
        pin37: "net.N29",
        pin41: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-6.37}
      pcbY={2.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N10",
        pin2: "net.N29",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={10.26}
      pcbY={0.11}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={2.24}
      pcbY={-1.32}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
        pin3: "net.N15",
      }}
      type="bjt"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-2.21}
      pcbY={-17.96}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N30",
      }}
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={17.5}
      pcbY={-7.02}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N4",
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-2"
      footprint="axial_p0.2in"
      pcbX={16.45}
      pcbY={8.82}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={17.99}
      pcbY={-1.55}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={-7.18}
      pcbY={-3.43}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N26",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-18.06}
      pcbY={7.03}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
  </board>
)
