/** Randomly generated circuit 233. */
export default () => (
  <board width="23.00mm" height="40.00mm">
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin4: "net.N7",
        pin8: "net.N7",
        pin7: "net.N9",
        pin6: "net.N10",
        pin2: "net.N12",
        pin5: "net.N13",
        pin3: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-7.5}
      pcbY={-10.5}
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-7.0}
      pcbY={9.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={1.5}
      pcbY={-10.5}
      connections={{
        pin3: "net.N3",
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-1.0}
      pcbY={9.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={5.0}
      pcbY={8.0}
      connections={{
        pin3: "net.N1",
        pin1: "net.N3",
        pin2: "net.N11",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-6.5}
      pcbY={-6.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-1.0}
      pcbY={13.5}
      connections={{
        pin2: "net.N1",
        pin6: "net.N2",
        pin1: "net.N4",
        pin4: "net.N5",
        pin5: "net.N11",
        pin3: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-7.0}
      pcbY={-16.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={1.0}
      pcbY={-14.5}
      connections={{
        pin2: "net.N6",
        pin6: "net.N6",
        pin3: "net.N6",
        pin5: "net.N9",
        pin4: "net.N11",
        pin1: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
