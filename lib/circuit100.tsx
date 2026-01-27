/** Randomly generated circuit 100. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-1.5}
      pcbY={5.0}
      connections={{
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={1.5}
      pcbY={-3.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-9.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-0.5}
      pcbY={-7.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }}
    />
  </board>
)
