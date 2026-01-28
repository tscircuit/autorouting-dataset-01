/** Randomly generated circuit 173. */
export default () => (
  <board width="60.00mm" height="60.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={7.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-13.0}
      pcbY={-17.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={16.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N28",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-1.0}
      pcbY={20.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N21",
        pin1: "net.N32",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={27.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-17.0}
      pcbY={13.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N23",
        pin2: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={5.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N20",
        pin2: "net.N32",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-27.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={3.0}
      pcbY={15.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-20.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-5.0}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N17",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={19.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N30",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={-14.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }}
    />
    <diode
      name="diode-5"
      footprint="SOD-123"
      pcbX={-7.0}
      pcbY={-27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={13.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin3: "net.N11",
        pin2: "net.N20",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={21.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N16",
        pin1: "net.N18",
        pin2: "net.N28",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-3.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin3: "net.N14",
        pin2: "net.N18",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-23.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N20",
        pin3: "net.N31",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={19.0}
      pcbY={-25.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N9",
        pin2: "net.N20",
        pin1: "net.N24",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={9.0}
      pcbY={25.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin6: "net.N1",
        pin8: "net.N5",
        pin7: "net.N6",
        pin1: "net.N13",
        pin2: "net.N13",
        pin5: "net.N17",
        pin3: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-27.0}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin8: "net.N4",
        pin2: "net.N19",
        pin6: "net.N22",
        pin7: "net.N27",
        pin3: "net.N29",
        pin1: "net.N30",
        pin5: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={21.0}
      pcbY={25.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin7: "net.N2",
        pin12: "net.N3",
        pin14: "net.N7",
        pin2: "net.N10",
        pin3: "net.N12",
        pin8: "net.N15",
        pin10: "net.N15",
        pin16: "net.N16",
        pin13: "net.N18",
        pin4: "net.N21",
        pin5: "net.N24",
        pin11: "net.N26",
        pin6: "net.N26",
        pin9: "net.N28",
        pin15: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={9.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N10",
        pin1: "net.N11",
        pin2: "net.N17",
        pin6: "net.N23",
        pin3: "net.N25",
        pin8: "net.N25",
        pin7: "net.N27",
        pin5: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={27.0}
      pcbY={-25.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N28",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-27.0}
      pcbY={-23.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N21",
        pin4: "net.N29",
        pin3: "net.N32",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={1.0}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin4: "net.N16",
        pin2: "net.N18",
        pin3: "net.N19",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader6"
      pcbX={-17.0}
      pcbY={23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N7",
        pin4: "net.N8",
        pin5: "net.N12",
        pin1: "net.N22",
        pin2: "net.N25",
        pin3: "net.N31",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
