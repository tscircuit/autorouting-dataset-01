/** Randomly generated circuit 154. */
export default () => (
  <board width="17.00mm" height="28.00mm">
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.0}
      pcbY={-7.5}
      connections={{
        pin3: "net.N2",
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={-4.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={4.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={4.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
  </board>
)
