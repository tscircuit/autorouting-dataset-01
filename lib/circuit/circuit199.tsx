/** Randomly generated circuit 199. */
export default () => (
  <board width="66.00mm" height="36.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={15.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N27",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={1.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-26.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N32",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-28.0}
      pcbY={14.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N33",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-15.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={2.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N24",
        pin1: "net.N29",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-28.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={22.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N34",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0603"
      pcbX={20.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N32",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={26.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-2.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N31",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-18.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N22",
        pin1: "net.N23",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={17.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N27",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={18.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N19",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={14.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N34",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={26.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N17",
        pin3: "net.N26",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N16",
        pin3: "net.N22",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-18.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N5",
        pin2: "net.N15",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-25.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N11",
        pin1: "net.N11",
        pin2: "net.N18",
        pin5: "net.N18",
        pin4: "net.N21",
        pin6: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={-6.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N1",
        pin12: "net.N3",
        pin11: "net.N5",
        pin14: "net.N5",
        pin15: "net.N7",
        pin6: "net.N10",
        pin2: "net.N11",
        pin9: "net.N14",
        pin5: "net.N19",
        pin4: "net.N20",
        pin3: "net.N20",
        pin13: "net.N24",
        pin16: "net.N27",
        pin1: "net.N28",
        pin10: "net.N29",
        pin7: "net.N35",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={25.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N7",
        pin5: "net.N28",
        pin4: "net.N29",
        pin6: "net.N30",
        pin2: "net.N32",
        pin1: "net.N35",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow8"
      pcbX={-10.0}
      pcbY={-15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin6: "net.N5",
        pin5: "net.N11",
        pin4: "net.N14",
        pin7: "net.N20",
        pin2: "net.N23",
        pin1: "net.N25",
        pin8: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-7"
      footprint="pinrow6"
      pcbX={10.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin1: "net.N7",
        pin3: "net.N15",
        pin4: "net.N17",
        pin5: "net.N21",
        pin2: "net.N30",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-8"
      footprint="soic8"
      pcbX={-2.0}
      pcbY={-3.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin5: "net.N1",
        pin7: "net.N13",
        pin2: "net.N14",
        pin3: "net.N26",
        pin8: "net.N27",
        pin1: "net.N30",
        pin6: "net.N31",
        pin4: "net.N35",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-20.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N23",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={4.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N10",
        pin2: "net.N32",
        pin3: "net.N33",
        pin1: "net.N34",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={-6.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N8",
        pin1: "net.N9",
        pin4: "net.N16",
        pin2: "net.N18",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
