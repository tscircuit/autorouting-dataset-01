/** Randomly generated circuit 109. */
export default () => (
  <board width="32.00mm" height="58.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={9.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={13.0}
      pcbY={17.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={10.0}
      pcbY={-17.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N26",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={3.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={-10.0}
      pcbY={-4.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N20",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-6"
      footprint="0603"
      pcbX={-11.0}
      pcbY={24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-7"
      footprint="0603"
      pcbX={-12.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-8"
      footprint="0603"
      pcbX={-12.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N17",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-6.0}
      pcbY={-20.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N19",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={0.0}
      pcbY={20.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={3.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={1.0}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-9.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-1.0}
      pcbY={24.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N22",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={5.0}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N19",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={-4.0}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N18",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={-22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N24",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={5.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin3: "net.N7",
        pin1: "net.N8",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={3.0}
      pcbY={-26.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin8: "net.N2",
        pin5: "net.N5",
        pin3: "net.N12",
        pin6: "net.N18",
        pin4: "net.N19",
        pin1: "net.N20",
        pin2: "net.N20",
        pin7: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={11.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin4: "net.N4",
        pin6: "net.N9",
        pin8: "net.N9",
        pin5: "net.N21",
        pin2: "net.N22",
        pin7: "net.N24",
        pin1: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={11.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N2",
        pin1: "net.N2",
        pin6: "net.N6",
        pin3: "net.N6",
        pin2: "net.N7",
        pin8: "net.N10",
        pin5: "net.N21",
        pin4: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="dip8"
      pcbX={11.0}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin4: "net.N4",
        pin8: "net.N8",
        pin6: "net.N10",
        pin2: "net.N10",
        pin3: "net.N16",
        pin1: "net.N19",
        pin7: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="dip8"
      pcbX={-1.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin8: "net.N11",
        pin7: "net.N16",
        pin5: "net.N17",
        pin6: "net.N22",
        pin2: "net.N25",
        pin4: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-13.0}
      pcbY={12.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin6: "net.N14",
        pin5: "net.N14",
        pin3: "net.N18",
        pin1: "net.N20",
        pin2: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-3.0}
      pcbY={-10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin4: "net.N10",
        pin2: "net.N11",
        pin1: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
