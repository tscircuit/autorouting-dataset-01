/** Randomly generated circuit 291. */
export default () => (
  <board width="52.00mm" height="52.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
        pin5: "net.N14",
        pin4: "net.N17",
        pin3: "net.N25",
        pin6: "net.N25",
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
        pin2: "net.N7",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N20",
        pin1: "net.N22",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={2.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
        pin3: "net.N6",
        pin4: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={7.5}
      pcbY={10.5}
      connections={{
        pin3: "net.N8",
        pin1: "net.N13",
        pin2: "net.N19",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-10.5}
      pcbY={-10.5}
      connections={{
        pin2: "net.N4",
        pin3: "net.N12",
        pin1: "net.N21",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader6"
      pcbX={-12.0}
      pcbY={12.0}
      connections={{
        pin3: "net.N1",
        pin4: "net.N3",
        pin1: "net.N5",
        pin6: "net.N8",
        pin5: "net.N17",
        pin2: "net.N19",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={2.0}
      pcbY={-12.0}
      connections={{
        pin5: "net.N17",
        pin2: "net.N18",
        pin3: "net.N19",
        pin4: "net.N24",
        pin1: "net.N25",
        pin6: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic16"
      pcbX={14.5}
      pcbY={-14.5}
      connections={{
        pin6: "net.N2",
        pin9: "net.N3",
        pin8: "net.N4",
        pin7: "net.N9",
        pin12: "net.N10",
        pin4: "net.N11",
        pin2: "net.N14",
        pin14: "net.N15",
        pin5: "net.N15",
        pin15: "net.N16",
        pin11: "net.N18",
        pin1: "net.N24",
        pin3: "net.N24",
        pin16: "net.N24",
        pin13: "net.N26",
        pin10: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinheader4"
      pcbX={-18.0}
      pcbY={-21.0}
      connections={{
        pin4: "net.N4",
        pin3: "net.N10",
        pin2: "net.N18",
        pin1: "net.N26",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-1.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
        pin3: "net.N23",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={1.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N12",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={5.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={1.0}
      pcbY={7.5}
      connections={{
        pin1: "net.N20",
        pin2: "net.N22",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={-13.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={8.5}
      pcbY={4.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-9.5}
      pcbY={-6.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N25",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={15.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N22",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={13.0}
      pcbY={-1.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={10.5}
      pcbY={-9.5}
      connections={{
        pin2: "net.N8",
        pin1: "net.N18",
      }}
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={15.0}
      pcbY={3.5}
      connections={{
        pin1: "net.N1",
        pin3: "net.N12",
        pin2: "net.N23",
      }}
      type="npn"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={16.0}
      pcbY={10.0}
      connections={{
        pin2: "net.N20",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-3"
      footprint="soic8"
      pcbX={19.5}
      pcbY={19.5}
      connections={{
        pin3: "net.N5",
        pin7: "net.N13",
        pin5: "net.N14",
        pin2: "net.N16",
        pin1: "net.N16",
        pin8: "net.N20",
        pin6: "net.N21",
        pin4: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
