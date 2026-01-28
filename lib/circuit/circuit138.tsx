/** Randomly generated circuit 138. */
export default () => (
  <board width="48.00mm" height="48.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={13.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-19.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-19.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={10.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={3.0}
      pcbY={-16.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={3.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0805"
      pcbX={10.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-7.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N5",
        pin3: "net.N6",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-17.0}
      pcbY={-1.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin2: "net.N12",
        pin1: "net.N18",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-1.0}
      pcbY={-21.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin3: "net.N5",
        pin2: "net.N7",
        pin1: "net.N17",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={15.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N8",
        pin1: "net.N8",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-9.0}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin4: "net.N9",
        pin6: "net.N11",
        pin1: "net.N12",
        pin3: "net.N13",
        pin2: "net.N15",
        pin5: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={19.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin8: "net.N6",
        pin1: "net.N10",
        pin2: "net.N11",
        pin6: "net.N14",
        pin5: "net.N15",
        pin3: "net.N16",
        pin7: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-9.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-21.0}
      pcbY={21.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin5: "net.N11",
        pin3: "net.N17",
        pin1: "net.N19",
        pin6: "net.N20",
        pin4: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={21.0}
      pcbY={19.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin4: "net.N8",
        pin6: "net.N9",
        pin3: "net.N14",
        pin5: "net.N18",
        pin2: "net.N18",
        pin1: "net.N20",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader4"
      pcbX={-15.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin3: "net.N4",
        pin1: "net.N7",
        pin4: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinheader2"
      pcbX={3.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N16",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinheader6"
      pcbX={-17.0}
      pcbY={-19.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin6: "net.N6",
        pin2: "net.N7",
        pin4: "net.N15",
        pin5: "net.N17",
        pin3: "net.N19",
        pin1: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
