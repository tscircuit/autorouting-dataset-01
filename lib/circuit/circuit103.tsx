/** Randomly generated circuit 103. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="54.00mm"
    height="30.00mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={14.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-18.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N11",
        pin2: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={20.0}
      pcbY={-4.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-1.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N24",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={19.0}
      pcbY={-7.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N18",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0805"
      pcbX={1.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-7"
      footprint="0603"
      pcbX={-24.0}
      pcbY={-10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={12.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={13.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N15",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-2.0}
      pcbY={11.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={8.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-10.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N20",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={2.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={4.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N16",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={19.0}
      pcbY={7.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N23",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={22.0}
      pcbY={12.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin1: "net.N7",
        pin2: "net.N16",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-12.0}
      pcbY={0.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N22",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-24.0}
      pcbY={4.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N17",
        pin1: "net.N20",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-16.0}
      pcbY={-12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin9: "net.N1",
        pin3: "net.N3",
        pin5: "net.N3",
        pin7: "net.N6",
        pin13: "net.N6",
        pin1: "net.N7",
        pin11: "net.N9",
        pin14: "net.N13",
        pin10: "net.N13",
        pin8: "net.N14",
        pin2: "net.N18",
        pin15: "net.N19",
        pin12: "net.N20",
        pin16: "net.N23",
        pin6: "net.N24",
        pin4: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={10.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N12",
        pin3: "net.N15",
        pin1: "net.N17",
        pin2: "net.N22",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={6.0}
      pcbY={4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N21",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-24.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N5",
        pin5: "net.N8",
        pin1: "net.N8",
        pin6: "net.N13",
        pin2: "net.N22",
        pin3: "net.N23",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-8.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N9",
        pin4: "net.N11",
        pin2: "net.N12",
        pin1: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
