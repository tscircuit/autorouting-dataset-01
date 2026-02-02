/** Randomly generated circuit 136. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-4.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={2.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-2.0}
      pcbY={-5.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-5.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={2.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={5.0}
      pcbY={-4.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={2.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-1.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={3.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
