/** Randomly generated circuit 237. */
export default () => (
  <board width="35.00mm" height="35.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N2",
        pin3: "net.N13",
        pin2: "net.N14",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-4.5}
      pcbY={4.5}
      connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N16",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={6.0}
      pcbY={-7.5}
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={7.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N7",
        pin3: "net.N12",
        pin2: "net.N14",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-7.0}
      pcbY={-10.0}
      connections={{
        pin6: "net.N3",
        pin2: "net.N4",
        pin5: "net.N5",
        pin1: "net.N8",
        pin4: "net.N8",
        pin3: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={7.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }}
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-11.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N9",
        pin3: "net.N10",
        pin1: "net.N13",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-11.0}
      pcbY={11.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-4.0}
      pcbY={12.0}
      connections={{
        pin3: "net.N1",
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={8.0}
      pcbY={2.0}
      connections={{
        pin4: "net.N2",
        pin1: "net.N3",
        pin3: "net.N6",
        pin2: "net.N14",
        pin6: "net.N15",
        pin5: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={3.0}
      pcbY={13.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={1.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={8.0}
      pcbY={-11.5}
      connections={{
        pin4: "net.N5",
        pin5: "net.N9",
        pin2: "net.N11",
        pin3: "net.N13",
        pin6: "net.N15",
        pin1: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-13.0}
      pcbY={2.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={9.0}
      pcbY={11.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
