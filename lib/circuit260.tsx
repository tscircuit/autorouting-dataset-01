/** Randomly generated circuit 260. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N5",
        pin3: "net.N6",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-6.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={3.0}
      pcbY={7.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-1.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={3.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={2.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={-4.5}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0603"
      pcbX={4.5}
      pcbY={-2.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
  </board>
)
