/** Randomly generated circuit 154. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="28.00mm"
    height="50.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={10.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-5.0}
      pcbY={12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={3.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={6.0}
      pcbY={-8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N20",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-6.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-3.0}
      pcbY={18.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N17",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={1.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={7.0}
      pcbY={-18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={3.0}
      pcbY={22.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={0.0}
      pcbY={12.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={6.0}
      pcbY={5.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={8.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N13",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod323"
      pcbX={-9.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={11.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N16",
        pin3: "net.N19",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-11.0}
      pcbY={-2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N15",
        pin3: "net.N21",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={0.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
        pin3: "net.N20",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={9.0}
      pcbY={6.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin6: "net.N4",
        pin4: "net.N5",
        pin10: "net.N6",
        pin1: "net.N7",
        pin16: "net.N8",
        pin8: "net.N9",
        pin14: "net.N10",
        pin12: "net.N10",
        pin13: "net.N11",
        pin3: "net.N12",
        pin11: "net.N12",
        pin7: "net.N12",
        pin2: "net.N13",
        pin9: "net.N18",
        pin15: "net.N19",
        pin5: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-11.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={3.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin4: "net.N4",
        pin6: "net.N5",
        pin5: "net.N16",
        pin3: "net.N16",
        pin1: "net.N18",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-11.0}
      pcbY={-16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N18",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
