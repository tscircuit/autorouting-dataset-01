/** Randomly generated circuit 166. */
export default () => (
  <board width="14.00mm" height="14.00mm">
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-4.0}
      pcbY={0.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-3.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={2.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={2.0}
      pcbY={-2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
