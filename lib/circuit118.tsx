/** Randomly generated circuit 118. */
export default () => (
  <board width="28.00mm" height="17.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={7.0}
      pcbY={-1.5}
      connections={{
        pin7: "net.N2",
        pin1: "net.N2",
        pin8: "net.N3",
        pin4: "net.N5",
        pin3: "net.N5",
        pin6: "net.N6",
        pin2: "net.N6",
        pin5: "net.N7",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-10.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-10.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
  </board>
)
