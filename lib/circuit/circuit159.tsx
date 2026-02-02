/** Randomly generated circuit 159. */
export default () => (
  <board width="26.00mm" height="46.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-5.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N20",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-5.0}
      pcbY={13.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-2.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-9.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-6.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N28",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-6.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N29",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-6.0}
      pcbY={-12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N20",
        pin1: "net.N22",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-9.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N19",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={-6.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
        pin3: "net.N15",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={10.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
        pin7: "net.N8",
        pin5: "net.N12",
        pin6: "net.N17",
        pin8: "net.N21",
        pin3: "net.N24",
        pin4: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={10.0}
      pcbY={20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N4",
        pin4: "net.N6",
        pin1: "net.N6",
        pin3: "net.N8",
        pin2: "net.N10",
        pin5: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={6.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin11: "net.N1",
        pin16: "net.N5",
        pin15: "net.N5",
        pin2: "net.N7",
        pin12: "net.N9",
        pin13: "net.N12",
        pin4: "net.N13",
        pin10: "net.N16",
        pin6: "net.N19",
        pin5: "net.N19",
        pin1: "net.N20",
        pin3: "net.N21",
        pin8: "net.N22",
        pin9: "net.N25",
        pin14: "net.N27",
        pin7: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow6"
      pcbX={-2.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin6: "net.N5",
        pin5: "net.N7",
        pin2: "net.N10",
        pin3: "net.N18",
        pin4: "net.N25",
        pin1: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic8"
      pcbX={10.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin3: "net.N11",
        pin8: "net.N12",
        pin5: "net.N14",
        pin2: "net.N14",
        pin4: "net.N17",
        pin1: "net.N23",
        pin7: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-8.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin4: "net.N11",
        pin1: "net.N15",
        pin3: "net.N29",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={6.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N13",
        pin1: "net.N26",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-4.0}
      pcbY={4.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N3",
        pin1: "net.N13",
        pin4: "net.N14",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={-18.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin5: "net.N14",
        pin6: "net.N16",
        pin1: "net.N18",
        pin4: "net.N25",
        pin2: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
