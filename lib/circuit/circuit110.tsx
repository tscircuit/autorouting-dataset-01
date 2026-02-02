/** Randomly generated circuit 110. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-2.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={4.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-1.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={2.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-4.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-4.0}
      pcbY={2.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-6.0}
      pcbY={0.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin5: "net.N1",
        pin6: "net.N1",
        pin3: "net.N5",
        pin2: "net.N5",
        pin4: "net.N6",
        pin1: "net.N7",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={6.0}
      pcbY={4.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
