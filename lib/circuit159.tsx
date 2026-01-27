/** Randomly generated circuit 159. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-2.0}
      pcbY={-7.0}
      connections={{
        pin4: "net.N1",
        pin7: "net.N2",
        pin3: "net.N3",
        pin5: "net.N3",
        pin8: "net.N4",
        pin6: "net.N5",
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={0.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N5",
        pin4: "net.N6",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
