/** Randomly generated circuit 140. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={0.0}
      pcbY={-6.0}
      connections={{
        pin5: "net.N1",
        pin1: "net.N2",
        pin6: "net.N2",
        pin4: "net.N3",
        pin2: "net.N3",
        pin3: "net.N4",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-6.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N4",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={4.5}
      connections={{
        pin1: "net.N2",
        pin3: "net.N4",
        pin2: "net.N4",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-4.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
  </board>
)
