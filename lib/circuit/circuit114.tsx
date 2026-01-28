/** Randomly generated circuit 114. */
export default () => (
  <board width="66.00mm" height="36.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-27.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={7.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={7.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N16",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-22.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-17.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N33",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={6.0}
      pcbY={12.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={16.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N25",
        pin1: "net.N28",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={23.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N10",
        pin1: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0402"
      pcbX={15.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N29",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={8.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N30",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-6.0}
      pcbY={5.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N34",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={28.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N20",
        pin1: "net.N24",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-14.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N22",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={-2.0}
      pcbY={9.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={14.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N29",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={5.0}
      pcbY={-6.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N26",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-10.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N16",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={12.0}
      pcbY={3.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin3: "net.N9",
        pin2: "net.N11",
        pin1: "net.N23",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={14.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin2: "net.N16",
        pin1: "net.N33",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-28.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin2: "net.N19",
        pin1: "net.N27",
      }}
      type="npn"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={-24.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N19",
        pin2: "net.N31",
        pin1: "net.N34",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={22.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin8: "net.N4",
        pin1: "net.N5",
        pin5: "net.N11",
        pin2: "net.N12",
        pin7: "net.N28",
        pin6: "net.N32",
        pin4: "net.N34",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={-18.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin15: "net.N1",
        pin8: "net.N6",
        pin2: "net.N6",
        pin7: "net.N8",
        pin1: "net.N9",
        pin11: "net.N13",
        pin5: "net.N15",
        pin16: "net.N15",
        pin14: "net.N17",
        pin12: "net.N25",
        pin13: "net.N25",
        pin3: "net.N28",
        pin6: "net.N30",
        pin4: "net.N31",
        pin9: "net.N31",
        pin10: "net.N32",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={-6.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin6: "net.N10",
        pin1: "net.N23",
        pin4: "net.N23",
        pin5: "net.N27",
        pin3: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-4.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N19",
        pin1: "net.N20",
        pin4: "net.N25",
        pin2: "net.N30",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={28.0}
      pcbY={-3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin6: "net.N3",
        pin1: "net.N8",
        pin3: "net.N16",
        pin5: "net.N24",
        pin4: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={-12.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N14",
        pin1: "net.N14",
        pin3: "net.N18",
        pin2: "net.N31",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader2"
      pcbX={20.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N21",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinheader4"
      pcbX={-30.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N8",
        pin2: "net.N21",
        pin1: "net.N22",
        pin3: "net.N28",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinheader2"
      pcbX={-28.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
