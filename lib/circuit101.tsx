/** Randomly generated circuit 101. */
export default () => (
  <board width="15.00mm" height="24.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N1",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-3.0}
      pcbY={-4.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={7.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
  </board>
)
