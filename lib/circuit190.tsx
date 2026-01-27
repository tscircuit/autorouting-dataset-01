/** Randomly generated circuit 190. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin3: "net.N3",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-2.0}
      pcbY={-4.0}
      connections={{
        pin6: "net.N1",
        pin3: "net.N1",
        pin1: "net.N2",
        pin4: "net.N3",
        pin5: "net.N3",
        pin2: "net.N4",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={1.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
  </board>
)
