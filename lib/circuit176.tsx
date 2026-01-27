/** Randomly generated circuit 176. */
export default () => (
  <board width="28.00mm" height="17.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-9.0}
      pcbY={-4.5}
      connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N4",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={9.0}
      pcbY={-4.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-2.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={1.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-5.5}
      pcbY={-0.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={8.0}
      pcbY={1.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
    />
  </board>
)
