/** Randomly generated circuit 140. */
export default () => (
  <board width="38.00mm" height="38.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={5.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N17",
        pin1: "net.N27",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={1.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N26",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-10.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-16.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-15.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N20",
        pin2: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={14.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-6.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin3: "net.N17",
        pin1: "net.N23",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-4.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N19",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N7",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={16.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin7: "net.N3",
        pin3: "net.N3",
        pin8: "net.N4",
        pin13: "net.N8",
        pin2: "net.N9",
        pin6: "net.N10",
        pin15: "net.N13",
        pin10: "net.N14",
        pin1: "net.N15",
        pin9: "net.N16",
        pin5: "net.N23",
        pin14: "net.N23",
        pin12: "net.N24",
        pin16: "net.N25",
        pin11: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-16.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N1",
        pin8: "net.N7",
        pin5: "net.N9",
        pin1: "net.N13",
        pin6: "net.N17",
        pin2: "net.N18",
        pin3: "net.N21",
        pin4: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={0.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin8: "net.N5",
        pin6: "net.N11",
        pin2: "net.N13",
        pin3: "net.N14",
        pin7: "net.N18",
        pin5: "net.N22",
        pin4: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow6"
      pcbX={-16.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin5: "net.N12",
        pin1: "net.N14",
        pin3: "net.N16",
        pin4: "net.N21",
        pin6: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="pinrow8"
      pcbX={16.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N2",
        pin6: "net.N7",
        pin5: "net.N8",
        pin3: "net.N8",
        pin7: "net.N10",
        pin1: "net.N20",
        pin2: "net.N24",
        pin4: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={14.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin3: "net.N17",
        pin6: "net.N19",
        pin4: "net.N20",
        pin5: "net.N20",
        pin1: "net.N22",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
