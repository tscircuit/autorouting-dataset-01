/** Randomly generated circuit 146. */
export default () => (
  <board width="58.00mm" height="32.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={1.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={3.0}
      pcbY={0.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={24.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={22.0}
      pcbY={10.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-14.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={17.0}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-24.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N24",
        pin1: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={12.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={24.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N26",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={12.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-18.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N27",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={8.0}
      pcbY={3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-6.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N26",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-10.0}
      pcbY={-12.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N17",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={16.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin1: "net.N13",
        pin2: "net.N21",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-8.0}
      pcbY={11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N22",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-24.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
        pin3: "net.N20",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-24.0}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin2: "net.N11",
        pin1: "net.N22",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-18.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N4",
        pin3: "net.N9",
        pin6: "net.N11",
        pin4: "net.N17",
        pin2: "net.N25",
        pin1: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={10.0}
      pcbY={-13.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin8: "net.N2",
        pin1: "net.N8",
        pin6: "net.N13",
        pin3: "net.N15",
        pin7: "net.N16",
        pin4: "net.N21",
        pin5: "net.N21",
        pin2: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-20.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N14",
        pin1: "net.N18",
        pin4: "net.N19",
        pin2: "net.N27",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-12.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N27",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={4.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin1: "net.N12",
        pin6: "net.N21",
        pin2: "net.N23",
        pin3: "net.N23",
        pin5: "net.N24",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow4"
      pcbX={-26.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N14",
        pin2: "net.N17",
        pin4: "net.N20",
        pin1: "net.N22",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow6"
      pcbX={26.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N2",
        pin1: "net.N5",
        pin4: "net.N10",
        pin2: "net.N11",
        pin3: "net.N12",
        pin6: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
