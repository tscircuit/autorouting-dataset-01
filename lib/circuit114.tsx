/** Randomly generated circuit 114. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-10.5}
      pcbY={-4.5}
      connections={{
        pin5: "net.N2",
        pin3: "net.N2",
        pin8: "net.N5",
        pin4: "net.N5",
        pin6: "net.N9",
        pin1: "net.N9",
        pin2: "net.N10",
        pin7: "net.N11",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={9.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={9.0}
      pcbY={1.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-13.5}
      pcbY={4.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-1.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={3.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={8.5}
      pcbY={5.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
        pin3: "net.N4",
        pin4: "net.N4",
        pin6: "net.N4",
        pin7: "net.N10",
        pin8: "net.N10",
        pin5: "net.N11",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-4.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
  </board>
)
