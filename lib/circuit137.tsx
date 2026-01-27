/** Randomly generated circuit 137. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin3: "net.N3",
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
        pin3: "net.N6",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={1.5}
      pcbY={-3.5}
      connections={{
        pin3: "net.N1",
        pin1: "net.N4",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={4.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-4.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
  </board>
)
