/** Randomly generated circuit 171. */
export default () => (
  <board width="13.00mm" height="20.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-2.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-2.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
  </board>
)
