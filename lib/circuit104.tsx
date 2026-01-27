/** Randomly generated circuit 104. */
export default () => (
  <board width="24.00mm" height="15.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-7.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-6.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={7.0}
      pcbY={-3.0}
      connections={{
        pin3: "net.N2",
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      type="npn"
    />
  </board>
)
