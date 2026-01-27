/** Randomly generated circuit 219. */
export default () => (
  <board width="21.00mm" height="21.00mm">
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin3: "net.N1",
        pin6: "net.N1",
        pin11: "net.N2",
        pin14: "net.N2",
        pin5: "net.N3",
        pin4: "net.N3",
        pin13: "net.N3",
        pin2: "net.N4",
        pin10: "net.N4",
        pin9: "net.N4",
        pin1: "net.N5",
        pin16: "net.N6",
        pin15: "net.N6",
        pin7: "net.N8",
        pin12: "net.N8",
        pin8: "net.N8",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-7.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-4.5}
      pcbY={4.5}
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={0.0}
      pcbY={-7.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={1.0}
      pcbY={5.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-6"
      footprint="0805"
      pcbX={4.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
  </board>
)
