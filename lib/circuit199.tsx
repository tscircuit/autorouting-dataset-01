/** Randomly generated circuit 199. */
export default () => (
  <board width="36.00mm" height="21.00mm">
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-4.0}
      pcbY={4.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={1.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={6.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={8.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-4.5}
      pcbY={-0.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={9.5}
      pcbY={4.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin4: "net.N6",
        pin3: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={0.5}
      pcbY={-6.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-1.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-12.0}
      pcbY={4.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={3.5}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
  </board>
)
