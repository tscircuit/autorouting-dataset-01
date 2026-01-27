/** Randomly generated circuit 250. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-5.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={2.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N1",
        pin3: "net.N1",
        pin1: "net.N8",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-1.5}
      pcbY={3.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={10.5}
      pcbY={3.0}
      connections={{
        pin5: "net.N2",
        pin3: "net.N3",
        pin7: "net.N4",
        pin6: "net.N4",
        pin8: "net.N6",
        pin4: "net.N6",
        pin2: "net.N10",
        pin1: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={11.0}
      pcbY={-6.0}
      connections={{
        pin3: "net.N2",
        pin2: "net.N7",
        pin1: "net.N8",
      }}
      type="npn"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-13.5}
      pcbY={-7.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-13.5}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-7.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-11.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
  </board>
)
