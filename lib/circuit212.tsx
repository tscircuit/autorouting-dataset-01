/** Randomly generated circuit 212. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={-9.0}
      connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-9.0}
      pcbY={9.0}
      connections={{
        pin1: "net.N1",
        pin6: "net.N1",
        pin2: "net.N5",
        pin3: "net.N5",
        pin5: "net.N8",
        pin4: "net.N11",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={9.0}
      pcbY={-9.0}
      connections={{
        pin2: "net.N3",
        pin4: "net.N5",
        pin3: "net.N6",
        pin1: "net.N6",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={6.0}
      pcbY={7.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={10.5}
      pcbY={16.5}
      connections={{
        pin1: "net.N4",
        pin4: "net.N6",
        pin3: "net.N9",
        pin2: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={9.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader2"
      pcbX={-4.0}
      pcbY={4.0}
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-9.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={1.0}
      pcbY={-3.5}
      connections={{
        pin3: "net.N1",
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-12.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={12.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N9",
      }}
    />
  </board>
)
