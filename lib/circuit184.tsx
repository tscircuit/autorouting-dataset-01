/** Randomly generated circuit 184. */
export default () => (
  <board width="34.00mm" height="20.00mm">
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={8.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={3.0}
      pcbY={4.0}
      connections={{
        pin3: "net.N4",
        pin1: "net.N4",
        pin2: "net.N4",
        pin4: "net.N5",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-1.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={1.0}
      pcbY={-3.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-11.0}
      pcbY={4.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
  </board>
)
