/** Randomly generated circuit 181. */
export default () => (
  <board width="64.00mm" height="64.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={11.0}
      pcbY={14.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N20",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-29.0}
      pcbY={24.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin2: "net.N21",
        pin1: "net.N24",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={27.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-27.0}
      pcbY={-11.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N29",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={13.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N21",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-10.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-11.0}
      pcbY={21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={11.0}
      pcbY={28.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N30",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={-10.0}
      pcbY={-26.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N28",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-19.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N25",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-1.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-7.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={21.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0805"
      pcbX={-3.0}
      pcbY={9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={5.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={4.0}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N29",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-13.0}
      pcbY={-27.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N18",
        pin1: "net.N20",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={9.0}
      pcbY={-29.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N16",
        pin2: "net.N19",
        pin1: "net.N20",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N23",
        pin3: "net.N26",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-13.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N29",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={27.0}
      pcbY={27.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N8",
        pin2: "net.N8",
        pin8: "net.N10",
        pin7: "net.N12",
        pin5: "net.N17",
        pin1: "net.N27",
        pin6: "net.N27",
        pin4: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={11.0}
      pcbY={-13.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin8: "net.N3",
        pin5: "net.N6",
        pin4: "net.N10",
        pin7: "net.N11",
        pin3: "net.N11",
        pin1: "net.N13",
        pin2: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={-17.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N5",
        pin2: "net.N20",
        pin1: "net.N22",
        pin3: "net.N25",
        pin6: "net.N28",
        pin5: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-25.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N10",
        pin4: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={21.0}
      pcbY={21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N7",
        pin3: "net.N9",
        pin2: "net.N23",
        pin1: "net.N28",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-21.0}
      pcbY={23.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N6",
        pin3: "net.N13",
        pin2: "net.N18",
        pin1: "net.N24",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={-1.0}
      pcbY={27.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin4: "net.N8",
        pin3: "net.N14",
        pin5: "net.N19",
        pin2: "net.N24",
        pin6: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow6"
      pcbX={-21.0}
      pcbY={-21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N1",
        pin3: "net.N5",
        pin5: "net.N15",
        pin2: "net.N17",
        pin4: "net.N19",
        pin1: "net.N26",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
