/** Randomly generated circuit 217. */
export default () => (
  <board width="52.00mm" height="29.00mm">
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-7.5}
      pcbY={-7.5}
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-7.5}
      pcbY={7.5}
      connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N9",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-1.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-6.0}
      pcbY={1.0}
      connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={2.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={7.0}
      pcbY={-7.0}
      connections={{
        pin4: "net.N2",
        pin5: "net.N3",
        pin6: "net.N3",
        pin8: "net.N5",
        pin3: "net.N7",
        pin2: "net.N7",
        pin1: "net.N8",
        pin7: "net.N8",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={12.0}
      pcbY={1.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={12.0}
      pcbY={9.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-15.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-16.0}
      pcbY={-9.0}
      connections={{
        pin3: "net.N10",
        pin2: "net.N12",
        pin1: "net.N13",
      }}
      type="npn"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-16.5}
      pcbY={7.5}
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={16.5}
      pcbY={-10.5}
      connections={{
        pin2: "net.N8",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={20.0}
      pcbY={-4.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={6.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={-1.0}
      pcbY={-10.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={21.0}
      pcbY={4.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
  </board>
)
