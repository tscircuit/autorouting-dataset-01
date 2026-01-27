/** Randomly generated circuit 224. */
export default () => (
  <board width="46.00mm" height="26.00mm">
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-7.5}
      pcbY={-7.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-6.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={1.5}
      pcbY={-7.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={3.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N10",
        pin3: "net.N12",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={12.0}
      pcbY={-7.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-7.0}
      pcbY={-2.0}
      connections={{
        pin3: "net.N1",
        pin2: "net.N2",
        pin1: "net.N10",
      }}
      type="npn"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={-15.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }}
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-10.0}
      pcbY={2.0}
      connections={{
        pin6: "net.N1",
        pin7: "net.N5",
        pin1: "net.N5",
        pin4: "net.N6",
        pin5: "net.N7",
        pin2: "net.N7",
        pin8: "net.N9",
        pin3: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={6.0}
      pcbY={-1.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={12.0}
      pcbY={-1.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={-2.0}
      pcbY={-3.5}
      connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={14.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N5",
        pin3: "net.N7",
        pin2: "net.N10",
      }}
      type="npn"
    />
    <diode
      name="diode-5"
      footprint="SOD-323"
      pcbX={-14.0}
      pcbY={-9.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N9",
      }}
    />
  </board>
)
