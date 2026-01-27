/** Randomly generated circuit 253. */
export default () => (
  <board width="21.00mm" height="21.00mm">
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={1.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N5",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={3.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={4.5}
      pcbY={-2.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={4.0}
      pcbY={1.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-5"
      footprint="SOD-123"
      pcbX={6.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
    />
  </board>
)
