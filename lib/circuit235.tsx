/** Randomly generated circuit 235. */
export default () => (
  <board width="46.00mm" height="26.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-10.5}
      pcbY={-7.5}
      connections={{
        pin6: "net.N1",
        pin3: "net.N8",
        pin1: "net.N8",
        pin8: "net.N11",
        pin7: "net.N12",
        pin5: "net.N15",
        pin4: "net.N16",
        pin2: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-7.5}
      pcbY={1.5}
      connections={{
        pin1: "net.N16",
        pin2: "net.N18",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={-7.5}
      connections={{
        pin2: "net.N7",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="dip8"
      pcbX={9.0}
      pcbY={-6.0}
      connections={{
        pin3: "net.N3",
        pin4: "net.N5",
        pin6: "net.N7",
        pin2: "net.N7",
        pin5: "net.N10",
        pin7: "net.N11",
        pin1: "net.N11",
        pin8: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={1.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N10",
        pin3: "net.N15",
        pin2: "net.N17",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-7.0}
      pcbY={7.0}
      connections={{
        pin1: "net.N9",
        pin3: "net.N9",
        pin2: "net.N12",
      }}
      type="npn"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={10.5}
      pcbY={4.5}
      connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N13",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={1.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={1.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-16.5}
      pcbY={1.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-14.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N4",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={18.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }}
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={16.5}
      pcbY={8.0}
      connections={{
        pin4: "net.N3",
        pin1: "net.N3",
        pin3: "net.N6",
        pin7: "net.N6",
        pin8: "net.N12",
        pin5: "net.N12",
        pin2: "net.N14",
        pin6: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={6.0}
      pcbY={0.5}
      connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }}
    />
  </board>
)
