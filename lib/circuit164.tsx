/** Randomly generated circuit 164. */
export default () => (
  <board width="20.00mm" height="34.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-5.0}
      pcbY={-6.0}
      connections={{
        pin3: "net.N5",
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={1.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-0.5}
      pcbY={9.0}
      connections={{
        pin5: "net.N1",
        pin1: "net.N2",
        pin3: "net.N3",
        pin7: "net.N4",
        pin8: "net.N5",
        pin4: "net.N7",
        pin2: "net.N8",
        pin6: "net.N9",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={4.5}
      pcbY={-7.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-6.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }}
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={6.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-5.0}
      pcbY={-12.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={2.0}
      pcbY={-13.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-0.5}
      pcbY={-3.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
  </board>
)
