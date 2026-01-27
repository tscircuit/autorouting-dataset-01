/** Randomly generated circuit 271. */
export default () => (
  <board width="27.00mm" height="48.00mm">
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N3",
        pin3: "net.N8",
        pin4: "net.N8",
        pin8: "net.N9",
        pin5: "net.N13",
        pin7: "net.N18",
        pin6: "net.N20",
        pin1: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-9.0}
      pcbY={-9.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-6.5}
      pcbY={6.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-4.5}
      pcbY={-6.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-2.0}
      pcbY={6.5}
      connections={{
        pin1: "net.N21",
        pin2: "net.N24",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={4.5}
      pcbY={-10.5}
      connections={{
        pin1: "net.N17",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={0.0}
      pcbY={-6.5}
      connections={{
        pin2: "net.N10",
        pin1: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={2.5}
      pcbY={6.5}
      connections={{
        pin1: "net.N15",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={9.0}
      pcbY={9.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N14",
        pin3: "net.N21",
      }}
      type="npn"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={-5.0}
      pcbY={14.0}
      connections={{
        pin12: "net.N1",
        pin5: "net.N3",
        pin14: "net.N4",
        pin2: "net.N6",
        pin16: "net.N7",
        pin7: "net.N7",
        pin1: "net.N10",
        pin13: "net.N12",
        pin6: "net.N13",
        pin8: "net.N15",
        pin15: "net.N15",
        pin3: "net.N16",
        pin11: "net.N18",
        pin4: "net.N18",
        pin9: "net.N20",
        pin10: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-9.0}
      pcbY={-1.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-7.5}
      pcbY={-18.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-4"
      footprint="soic16"
      pcbX={2.5}
      pcbY={-15.5}
      connections={{
        pin11: "net.N2",
        pin4: "net.N4",
        pin16: "net.N5",
        pin9: "net.N11",
        pin6: "net.N12",
        pin7: "net.N14",
        pin1: "net.N14",
        pin12: "net.N15",
        pin2: "net.N16",
        pin14: "net.N16",
        pin3: "net.N19",
        pin13: "net.N20",
        pin10: "net.N21",
        pin5: "net.N21",
        pin15: "net.N22",
        pin8: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={5.5}
      pcbY={14.0}
      connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N24",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={4.5}
      pcbY={-6.5}
      connections={{
        pin2: "net.N18",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-5"
      footprint="0805"
      pcbX={-7.0}
      pcbY={2.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N23",
      }}
      inductance="10uH"
    />
  </board>
)
