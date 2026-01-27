/** Randomly generated circuit 152. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={2.0}
      connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={9.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={9.0}
      pcbY={1.5}
      connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-1.5}
      pcbY={-3.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-11.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={2.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
  </board>
)
