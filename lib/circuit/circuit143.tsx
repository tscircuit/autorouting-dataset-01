/** Randomly generated circuit 143. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="29.00mm"
    height="52.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-4.5}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-7.5}
      pcbY={-22.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-8.5}
      pcbY={-17.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={-11.5}
      pcbY={19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N20",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-3.5}
      pcbY={19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-6.5}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={10.5}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-5.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={2.5}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-9.5}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N28",
        pin2: "net.N30",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-0.5}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N30",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={4.5}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N29",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-11.5}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N5",
        pin2: "net.N13",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={10.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N25",
        pin3: "net.N29",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={8.5}
      pcbY={21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N6",
        pin8: "net.N8",
        pin3: "net.N11",
        pin1: "net.N12",
        pin4: "net.N16",
        pin6: "net.N22",
        pin5: "net.N25",
        pin2: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={8.5}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin3: "net.N19",
        pin4: "net.N22",
        pin5: "net.N27",
        pin2: "net.N30",
        pin1: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic16"
      pcbX={-11.5}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin12: "net.N1",
        pin10: "net.N1",
        pin2: "net.N5",
        pin1: "net.N6",
        pin5: "net.N8",
        pin13: "net.N10",
        pin7: "net.N13",
        pin4: "net.N13",
        pin15: "net.N14",
        pin8: "net.N17",
        pin14: "net.N18",
        pin11: "net.N20",
        pin6: "net.N21",
        pin16: "net.N26",
        pin9: "net.N26",
        pin3: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic16"
      pcbX={-7.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin11: "net.N2",
        pin1: "net.N5",
        pin6: "net.N7",
        pin14: "net.N7",
        pin12: "net.N9",
        pin16: "net.N10",
        pin3: "net.N15",
        pin13: "net.N17",
        pin5: "net.N17",
        pin4: "net.N18",
        pin15: "net.N19",
        pin8: "net.N19",
        pin10: "net.N23",
        pin7: "net.N23",
        pin9: "net.N26",
        pin2: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-7"
      footprint="dip8"
      pcbX={0.5}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin6: "net.N3",
        pin7: "net.N6",
        pin1: "net.N11",
        pin3: "net.N15",
        pin8: "net.N18",
        pin5: "net.N21",
        pin2: "net.N22",
        pin4: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-9.5}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N28",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={10.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
