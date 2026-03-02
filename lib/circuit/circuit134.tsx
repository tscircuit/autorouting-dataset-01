/** Randomly generated circuit 134. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="113.40mm"
    height="113.40mm"
  >
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-41.25}
      pcbY={-3.75}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={5.625}
      pcbY={-31.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N24",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={22.5}
      pcbY={-45.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N26",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-37.5}
      pcbY={37.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-35.625}
      pcbY={-26.25}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={9.375}
      pcbY={-5.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-33.75}
      pcbY={-35.625}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0805"
      pcbX={-22.5}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={18.75}
      pcbY={24.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={31.875}
      pcbY={1.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-46.875}
      pcbY={-35.625}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-24.375}
      pcbY={37.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={39.375}
      pcbY={-1.875}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N25",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={28.125}
      pcbY={-45.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N20",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={20.625}
      pcbY={-31.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N8",
        pin2: "net.N10",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={1.875}
      pcbY={9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin3: "net.N19",
        pin2: "net.N23",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={28.125}
      pcbY={43.125}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin5: "net.N5",
        pin2: "net.N7",
        pin6: "net.N10",
        pin4: "net.N11",
        pin8: "net.N16",
        pin1: "net.N24",
        pin7: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-28.125}
      pcbY={-9.375}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N6",
        pin1: "net.N7",
        pin6: "net.N9",
        pin3: "net.N11",
        pin2: "net.N12",
        pin4: "net.N13",
        pin8: "net.N13",
        pin7: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={5.625}
      pcbY={-31.875}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin16: "net.N1",
        pin15: "net.N4",
        pin6: "net.N4",
        pin11: "net.N5",
        pin8: "net.N8",
        pin9: "net.N9",
        pin4: "net.N9",
        pin3: "net.N12",
        pin5: "net.N14",
        pin13: "net.N17",
        pin1: "net.N18",
        pin10: "net.N20",
        pin7: "net.N22",
        pin14: "net.N23",
        pin2: "net.N26",
        pin12: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={13.125}
      pcbY={24.375}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin3: "net.N21",
        pin1: "net.N22",
        pin4: "net.N25",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={16.875}
      pcbY={37.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N15",
        pin3: "net.N20",
        pin4: "net.N26",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={31.875}
      pcbY={-46.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={37.5}
      pcbY={28.125}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N14",
        pin3: "net.N21",
        pin4: "net.N22",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow2"
      pcbX={-24.375}
      pcbY={16.875}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N21",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinrow6"
      pcbX={-46.875}
      pcbY={37.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin1: "net.N13",
        pin5: "net.N15",
        pin4: "net.N18",
        pin3: "net.N26",
        pin2: "net.N27",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
