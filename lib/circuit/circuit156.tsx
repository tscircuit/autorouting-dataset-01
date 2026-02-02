/** Randomly generated circuit 156. */
export default () => (
  <board width="54.00mm" height="54.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-20.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-3.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={18.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-23.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-15.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={8.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-18.0}
      pcbY={-24.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={12.0}
      pcbY={-18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-10.0}
      pcbY={24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N27",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={21.0}
      pcbY={24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N27",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={8.0}
      pcbY={15.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-15.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N23",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-22.0}
      pcbY={16.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N15",
        pin3: "net.N24",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-8.0}
      pcbY={-2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N15",
        pin3: "net.N20",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={18.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin3: "net.N22",
        pin2: "net.N26",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={12.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin6: "net.N18",
        pin3: "net.N20",
        pin1: "net.N23",
        pin5: "net.N24",
        pin4: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={16.0}
      pcbY={-24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin5: "net.N6",
        pin6: "net.N10",
        pin3: "net.N17",
        pin1: "net.N18",
        pin4: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={20.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin16: "net.N3",
        pin7: "net.N3",
        pin2: "net.N5",
        pin12: "net.N6",
        pin3: "net.N10",
        pin13: "net.N13",
        pin15: "net.N14",
        pin8: "net.N22",
        pin11: "net.N26",
        pin6: "net.N26",
        pin4: "net.N27",
        pin10: "net.N27",
        pin14: "net.N28",
        pin9: "net.N28",
        pin5: "net.N29",
        pin1: "net.N29",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow6"
      pcbX={0.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N3",
        pin1: "net.N5",
        pin3: "net.N12",
        pin2: "net.N13",
        pin5: "net.N17",
        pin6: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={8.0}
      pcbY={-24.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin5: "net.N4",
        pin2: "net.N5",
        pin4: "net.N11",
        pin3: "net.N19",
        pin6: "net.N28",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={0.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin2: "net.N14",
        pin1: "net.N17",
        pin3: "net.N21",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={6.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N25",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={-20.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin2: "net.N13",
        pin4: "net.N13",
        pin6: "net.N21",
        pin3: "net.N22",
        pin1: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
