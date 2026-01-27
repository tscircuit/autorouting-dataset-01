/** Randomly generated circuit 155. */
export default () => (
  <board width="21.00mm" height="21.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-5.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={6.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-4.0}
      pcbY={-2.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
  </board>
)
