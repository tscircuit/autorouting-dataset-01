/** Randomly generated circuit 105. */
export default () => (
  <board width="44.00mm" height="44.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={15.0}
      pcbY={-14.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={3.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={19.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={11.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-9.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={1.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={19.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N21",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-2.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N16",
        pin1: "net.N17",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={5.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N19",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={9.0}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-5"
      footprint="SOD-123"
      pcbX={16.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={13.0}
      pcbY={19.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N21",
        pin3: "net.N22",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin6: "net.N5",
        pin4: "net.N10",
        pin5: "net.N11",
        pin2: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={17.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N4",
        pin14: "net.N4",
        pin5: "net.N4",
        pin12: "net.N5",
        pin4: "net.N6",
        pin13: "net.N8",
        pin6: "net.N10",
        pin16: "net.N11",
        pin11: "net.N17",
        pin2: "net.N18",
        pin3: "net.N18",
        pin9: "net.N18",
        pin1: "net.N19",
        pin7: "net.N21",
        pin15: "net.N22",
        pin10: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic8"
      pcbX={-19.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin1: "net.N7",
        pin4: "net.N12",
        pin7: "net.N14",
        pin6: "net.N15",
        pin5: "net.N24",
        pin8: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-17.0}
      pcbY={15.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin4: "net.N11",
        pin3: "net.N14",
        pin6: "net.N16",
        pin5: "net.N20",
        pin2: "net.N20",
        pin1: "net.N23",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-15.0}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N9",
        pin1: "net.N9",
        pin6: "net.N13",
        pin4: "net.N16",
        pin5: "net.N16",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={1.0}
      pcbY={-9.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
