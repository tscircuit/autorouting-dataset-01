/** Randomly generated circuit 185. */
export default () => (
  <board width="58.00mm" height="32.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={4.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={10.0}
      pcbY={-13.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={25.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N24",
        pin1: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={20.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-2.0}
      pcbY={-7.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N19",
        pin2: "net.N31",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-20.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N23",
        pin1: "net.N26",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={22.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N24",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={24.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={-24.0}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={21.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={25.0}
      pcbY={-1.0}
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
      pcbX={-21.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N21",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={14.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N23",
        pin3: "net.N27",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin3: "net.N24",
        pin1: "net.N27",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-12.0}
      pcbY={7.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N9",
        pin2: "net.N28",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-2.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin3: "net.N26",
        pin2: "net.N29",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={-26.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin3: "net.N20",
        pin1: "net.N23",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-14.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin10: "net.N2",
        pin11: "net.N2",
        pin4: "net.N5",
        pin8: "net.N6",
        pin9: "net.N11",
        pin7: "net.N13",
        pin3: "net.N14",
        pin13: "net.N15",
        pin14: "net.N16",
        pin6: "net.N17",
        pin1: "net.N18",
        pin15: "net.N23",
        pin16: "net.N27",
        pin2: "net.N28",
        pin12: "net.N29",
        pin5: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={-20.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
        pin3: "net.N11",
        pin5: "net.N25",
        pin4: "net.N29",
        pin6: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic16"
      pcbX={26.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin14: "net.N2",
        pin16: "net.N4",
        pin12: "net.N10",
        pin9: "net.N10",
        pin1: "net.N12",
        pin8: "net.N13",
        pin11: "net.N18",
        pin10: "net.N20",
        pin15: "net.N21",
        pin5: "net.N22",
        pin7: "net.N22",
        pin2: "net.N24",
        pin6: "net.N25",
        pin3: "net.N30",
        pin13: "net.N30",
        pin4: "net.N31",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={10.0}
      pcbY={9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin4: "net.N7",
        pin3: "net.N11",
        pin2: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
