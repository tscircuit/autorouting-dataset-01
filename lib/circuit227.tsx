/** Randomly generated circuit 227. */
export default () => (
  <board width="23.00mm" height="23.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N3",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-5.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin2: "net.N5",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-4.5}
      pcbY={4.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={1.5}
      pcbY={-4.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={-7.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-6.5}
      pcbY={-1.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
  </board>
)
