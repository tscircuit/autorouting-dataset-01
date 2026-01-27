/** Randomly generated circuit 207. */
export default () => (
  <board width="28.00mm" height="50.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-7.5}
      pcbY={7.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={1.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={2.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={-6.0}
      pcbY={-15.0}
      connections={{
        pin6: "net.N3",
        pin8: "net.N3",
        pin7: "net.N5",
        pin4: "net.N6",
        pin3: "net.N13",
        pin5: "net.N15",
        pin1: "net.N16",
        pin2: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={3.5}
      pcbY={-4.5}
      connections={{
        pin2: "net.N1",
        pin3: "net.N5",
        pin1: "net.N14",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={-13.5}
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-6.0}
      pcbY={11.5}
      connections={{
        pin4: "net.N1",
        pin6: "net.N6",
        pin1: "net.N7",
        pin5: "net.N17",
        pin3: "net.N18",
        pin2: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic8"
      pcbX={6.0}
      pcbY={15.0}
      connections={{
        pin6: "net.N2",
        pin1: "net.N2",
        pin5: "net.N7",
        pin2: "net.N9",
        pin3: "net.N10",
        pin8: "net.N11",
        pin7: "net.N12",
        pin4: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-9.0}
      pcbY={19.5}
      connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={-21.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={7.0}
      pcbY={2.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }}
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={8.0}
      pcbY={8.0}
      connections={{
        pin1: "net.N15",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-2.0}
      pcbY={18.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N17",
        pin3: "net.N18",
      }}
      type="npn"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={-1.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N8",
        pin2: "net.N15",
      }}
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-10.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-6.5}
      pcbY={-7.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-3.5}
      pcbY={7.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
  </board>
)
