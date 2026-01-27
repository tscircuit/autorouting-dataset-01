/** Randomly generated circuit 210. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-7.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={7.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={0.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={6.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={6.5}
      pcbY={-1.5}
      connections={{
        pin3: "net.N5",
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      type="npn"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-4.5}
      pcbY={0.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={-1.5}
      pcbY={-6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
  </board>
)
