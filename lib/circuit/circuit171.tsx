/** Randomly generated circuit 171. */
export default () => (
  <board width="21.00mm" height="36.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={4.5}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={1.5}
      pcbY={-12.0}
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
      pcbX={6.5}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-4.5}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0805"
      pcbX={5.5}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-5.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-1.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={7.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-7.5}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N6",
        pin1: "net.N15",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-7.5}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin1: "net.N7",
        pin2: "net.N15",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={0.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin4: "net.N3",
        pin3: "net.N8",
        pin7: "net.N10",
        pin8: "net.N11",
        pin6: "net.N13",
        pin2: "net.N13",
        pin5: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={6.5}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N5",
        pin1: "net.N7",
        pin2: "net.N11",
        pin5: "net.N12",
        pin4: "net.N12",
        pin3: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-7.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin5: "net.N3",
        pin1: "net.N4",
        pin3: "net.N9",
        pin6: "net.N9",
        pin2: "net.N11",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={-7.5}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N4",
        pin1: "net.N6",
        pin3: "net.N7",
        pin2: "net.N7",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
