/** Randomly generated circuit 270. */
export default () => (
  <board width="32.00mm" height="58.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin5: "net.N1",
        pin2: "net.N4",
        pin4: "net.N9",
        pin3: "net.N10",
        pin1: "net.N17",
        pin6: "net.N19",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-4.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N14",
        pin1: "net.N17",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin6: "net.N1",
        pin4: "net.N11",
        pin2: "net.N15",
        pin5: "net.N18",
        pin1: "net.N18",
        pin3: "net.N23",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N13",
        pin3: "net.N21",
        pin2: "net.N24",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={6.0}
      pcbY={4.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={-5.5}
      pcbY={-10.0}
      connections={{
        pin1: "net.N2",
        pin3: "net.N3",
        pin2: "net.N12",
        pin4: "net.N13",
        pin5: "net.N14",
        pin6: "net.N23",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={10.5}
      pcbY={12.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader2"
      pcbX={7.5}
      pcbY={8.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-9.5}
      pcbY={10.5}
      connections={{
        pin1: "net.N11",
        pin3: "net.N11",
        pin2: "net.N20",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-7.5}
      pcbY={-6.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={12.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={7.5}
      pcbY={-7.5}
      connections={{
        pin1: "net.N9",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={16.0}
      connections={{
        pin1: "net.N3",
        pin3: "net.N4",
        pin2: "net.N20",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinheader6"
      pcbX={-5.0}
      pcbY={-17.0}
      connections={{
        pin1: "net.N4",
        pin5: "net.N6",
        pin3: "net.N8",
        pin4: "net.N9",
        pin6: "net.N19",
        pin2: "net.N24",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={7.5}
      pcbY={-4.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N22",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-12.0}
      pcbY={19.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={8.0}
      pcbY={-16.5}
      connections={{
        pin2: "net.N16",
        pin1: "net.N20",
        pin3: "net.N21",
      }}
      type="npn"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={12.0}
      pcbY={19.5}
      connections={{
        pin2: "net.N5",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-2.5}
      pcbY={9.0}
      connections={{
        pin3: "net.N8",
        pin1: "net.N22",
        pin2: "net.N23",
      }}
      type="npn"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={-11.0}
      pcbY={-23.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N23",
      }}
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={0.0}
      pcbY={24.0}
      connections={{
        pin3: "net.N3",
        pin4: "net.N6",
        pin5: "net.N7",
        pin8: "net.N7",
        pin1: "net.N11",
        pin6: "net.N13",
        pin2: "net.N14",
        pin7: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-6"
      footprint="SOD-323"
      pcbX={-4.0}
      pcbY={-23.0}
      connections={{
        pin1: "net.N19",
        pin2: "net.N24",
      }}
    />
  </board>
)
