/** Randomly generated circuit 249. */
export default () => (
  <board width="31.00mm" height="31.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-9.0}
      pcbY={-9.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-6.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-4.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-1.5}
      pcbY={4.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={4.5}
      pcbY={-9.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={7.0}
      pcbY={8.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N6",
        pin3: "net.N10",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={-4.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={8.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N8",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-10.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-11.0}
      pcbY={-3.0}
      connections={{
        pin3: "net.N5",
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-6.0}
      pcbY={-0.5}
      connections={{
        pin2: "net.N2",
        pin3: "net.N6",
        pin1: "net.N10",
      }}
      type="npn"
    />
    <diode
      name="diode-5"
      footprint="SOD-323"
      pcbX={3.5}
      pcbY={-4.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={5.5}
      pcbY={0.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={5.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
  </board>
)
