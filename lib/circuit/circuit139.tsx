/** Randomly generated circuit 139. */
export default () => (
  <board width="60.00mm" height="33.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={3.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N20",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={5.0}
      pcbY={11.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N26",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-15.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={8.0}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N25",
        pin2: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-2.0}
      pcbY={-13.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={9.0}
      pcbY={10.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-23.0}
      pcbY={12.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={16.0}
      pcbY={9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0402"
      pcbX={23.0}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-5.0}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N24",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={5.0}
      pcbY={-5.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-14.0}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N22",
        pin2: "net.N27",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={10.0}
      pcbY={-5.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N26",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={-14.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N28",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={27.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin3: "net.N19",
        pin2: "net.N28",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={19.0}
      pcbY={-9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N13",
        pin1: "net.N16",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-25.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N12",
        pin1: "net.N19",
        pin2: "net.N22",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-7.0}
      pcbY={-9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N12",
        pin3: "net.N27",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={15.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N23",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-11.0}
      pcbY={10.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin5: "net.N14",
        pin7: "net.N15",
        pin2: "net.N17",
        pin6: "net.N18",
        pin1: "net.N21",
        pin4: "net.N22",
        pin3: "net.N22",
        pin8: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="dip8"
      pcbX={-15.0}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin6: "net.N1",
        pin5: "net.N4",
        pin3: "net.N5",
        pin8: "net.N9",
        pin7: "net.N11",
        pin1: "net.N14",
        pin4: "net.N15",
        pin2: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={23.0}
      pcbY={10.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N24",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-27.0}
      pcbY={-13.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin1: "net.N9",
        pin3: "net.N19",
        pin2: "net.N27",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader6"
      pcbX={-27.0}
      pcbY={2.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin5: "net.N11",
        pin2: "net.N14",
        pin6: "net.N18",
        pin4: "net.N20",
        pin1: "net.N23",
        pin3: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinheader6"
      pcbX={25.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin6: "net.N11",
        pin1: "net.N12",
        pin3: "net.N12",
        pin4: "net.N13",
        pin5: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
