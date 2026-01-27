/** Randomly generated circuit 120. */
export default () => (
  <board width="34.00mm" height="34.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin4: "net.N4",
        pin1: "net.N5",
        pin3: "net.N7",
        pin6: "net.N8",
        pin5: "net.N9",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-9.0}
      pcbY={9.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={8.0}
      connections={{
        pin3: "net.N2",
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-6.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-6.5}
      pcbY={-10.0}
      connections={{
        pin5: "net.N3",
        pin1: "net.N4",
        pin4: "net.N6",
        pin3: "net.N7",
        pin2: "net.N9",
        pin6: "net.N10",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={9.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={6.5}
      pcbY={-10.5}
      connections={{
        pin3: "net.N2",
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      type="npn"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={9.0}
      pcbY={12.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={-10.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
  </board>
)
