/** Randomly generated circuit 296. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-6.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={-4.5}
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={2.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-8.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={8.0}
      pcbY={2.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={8.0}
      pcbY={7.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
  </board>
)
