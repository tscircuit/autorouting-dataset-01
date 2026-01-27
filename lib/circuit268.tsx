/** Randomly generated circuit 268. */
export default () => (
  <board width="23.00mm" height="23.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-4.5}
      pcbY={-4.5}
      connections={{
        pin1: "net.N1",
        pin3: "net.N2",
        pin2: "net.N6",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={3.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={4.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={5.5}
      pcbY={-1.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-4.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
  </board>
)
