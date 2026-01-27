/** Randomly generated circuit 117. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-4.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={5.5}
      pcbY={-3.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={5.5}
      pcbY={2.5}
      connections={{
        pin7: "net.N1",
        pin6: "net.N4",
        pin1: "net.N4",
        pin2: "net.N4",
        pin3: "net.N5",
        pin8: "net.N5",
        pin5: "net.N5",
        pin4: "net.N5",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-2.5}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
  </board>
)
