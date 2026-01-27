/** Randomly generated circuit 258. */
export default () => (
  <board width="48.00mm" height="27.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-7.5}
      pcbY={-7.5}
      connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-7.0}
      pcbY={7.0}
      connections={{
        pin12: "net.N1",
        pin2: "net.N2",
        pin6: "net.N2",
        pin5: "net.N2",
        pin13: "net.N3",
        pin8: "net.N8",
        pin15: "net.N9",
        pin3: "net.N11",
        pin14: "net.N12",
        pin1: "net.N12",
        pin16: "net.N13",
        pin11: "net.N13",
        pin10: "net.N17",
        pin7: "net.N19",
        pin4: "net.N19",
        pin9: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={5.0}
      pcbY={-5.0}
      connections={{
        pin4: "net.N1",
        pin2: "net.N3",
        pin11: "net.N4",
        pin16: "net.N7",
        pin5: "net.N11",
        pin13: "net.N11",
        pin15: "net.N13",
        pin1: "net.N15",
        pin12: "net.N16",
        pin6: "net.N16",
        pin8: "net.N17",
        pin9: "net.N17",
        pin3: "net.N18",
        pin10: "net.N21",
        pin7: "net.N22",
        pin14: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={10.5}
      pcbY={9.0}
      connections={{
        pin6: "net.N14",
        pin5: "net.N15",
        pin3: "net.N21",
        pin2: "net.N21",
        pin1: "net.N25",
        pin4: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={6.0}
      pcbY={1.5}
      connections={{
        pin4: "net.N3",
        pin2: "net.N4",
        pin5: "net.N8",
        pin1: "net.N12",
        pin7: "net.N17",
        pin8: "net.N20",
        pin3: "net.N22",
        pin6: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-10.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N6",
        pin3: "net.N9",
        pin1: "net.N10",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={18.0}
      pcbY={-9.0}
      connections={{
        pin3: "net.N21",
        pin1: "net.N23",
        pin2: "net.N24",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-14.0}
      pcbY={-10.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-16.0}
      pcbY={-6.0}
      connections={{
        pin3: "net.N3",
        pin1: "net.N7",
        pin2: "net.N18",
        pin4: "net.N23",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={17.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N16",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={14.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N16",
        pin1: "net.N20",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-17.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-19.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N14",
        pin2: "net.N24",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-4.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }}
    />
  </board>
)
