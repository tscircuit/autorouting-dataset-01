/** Randomly generated circuit 167. */
export default () => (
  <board width="22.00mm" height="14.00mm">
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-4.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-3.0}
      pcbY={-4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={5.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-8.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin4: "net.N1",
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={2.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
