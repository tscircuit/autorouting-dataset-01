/** Randomly generated circuit 199. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="66.00mm"
    height="36.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={15.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={1.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-26.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N21",
        pin1: "net.N31",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-28.0}
      pcbY={14.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N32",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-15.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={2.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-28.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N22",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={22.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N31",
        pin1: "net.N33",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0603"
      pcbX={20.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={26.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N29",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-2.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N19",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-18.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N25",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={17.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N18",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={18.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N33",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={14.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N24",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={26.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N17",
        pin3: "net.N21",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N13",
        pin3: "net.N17",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-18.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N17",
        pin2: "net.N20",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-30.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin6: "net.N7",
        pin1: "net.N14",
        pin5: "net.N19",
        pin2: "net.N23",
        pin4: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={-6.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N1",
        pin15: "net.N2",
        pin1: "net.N9",
        pin9: "net.N11",
        pin12: "net.N12",
        pin2: "net.N14",
        pin4: "net.N16",
        pin5: "net.N18",
        pin10: "net.N20",
        pin7: "net.N23",
        pin11: "net.N24",
        pin6: "net.N26",
        pin16: "net.N27",
        pin14: "net.N30",
        pin13: "net.N33",
        pin3: "net.N34",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={30.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N2",
        pin3: "net.N3",
        pin6: "net.N9",
        pin4: "net.N15",
        pin2: "net.N22",
        pin1: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow8"
      pcbX={-10.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin6: "net.N6",
        pin8: "net.N10",
        pin5: "net.N20",
        pin7: "net.N26",
        pin4: "net.N28",
        pin2: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-8"
      footprint="soic8"
      pcbX={-2.0}
      pcbY={-3.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin7: "net.N12",
        pin8: "net.N21",
        pin3: "net.N23",
        pin4: "net.N24",
        pin1: "net.N29",
        pin6: "net.N30",
        pin5: "net.N34",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-18.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={8.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N17",
        pin2: "net.N30",
        pin3: "net.N32",
        pin1: "net.N33",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-6.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N4",
        pin3: "net.N10",
        pin1: "net.N16",
        pin2: "net.N25",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
