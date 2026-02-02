/** Randomly generated circuit 126. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={2.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={5.0}
      pcbY={6.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={0.0}
      pcbY={0.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin7: "net.N1",
        pin4: "net.N1",
        pin2: "net.N2",
        pin6: "net.N4",
        pin3: "net.N5",
        pin8: "net.N5",
        pin1: "net.N7",
        pin5: "net.N7",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
