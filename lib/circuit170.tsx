/** Randomly generated circuit 170. */
export default () => (
  <board width="18.00mm" height="30.00mm">
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-4.5}
      pcbY={-7.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
        pin3: "net.N5",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-5.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader2"
      pcbX={3.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={3.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={2.0}
      pcbY={-10.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
  </board>
)
