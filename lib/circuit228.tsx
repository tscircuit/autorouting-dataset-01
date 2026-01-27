/** Randomly generated circuit 228. */
export default () => (
  <board width="52.00mm" height="52.00mm">
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N31",
        pin2: "net.N36",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N34",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-7.5}
      pcbY={7.5}
      connections={{
        pin3: "net.N12",
        pin2: "net.N28",
        pin1: "net.N31",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={1.5}
      pcbY={7.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N29",
        pin2: "net.N35",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N17",
        pin1: "net.N25",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N12",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-9.0}
      pcbY={-9.0}
      connections={{
        pin4: "net.N12",
        pin3: "net.N13",
        pin1: "net.N15",
        pin2: "net.N19",
        pin6: "net.N22",
        pin5: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={10.5}
      pcbY={7.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N33",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={3.5}
      pcbY={-10.0}
      connections={{
        pin3: "net.N1",
        pin1: "net.N7",
        pin4: "net.N8",
        pin2: "net.N9",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-16.5}
      pcbY={16.5}
      connections={{
        pin6: "net.N1",
        pin2: "net.N2",
        pin1: "net.N9",
        pin4: "net.N9",
        pin5: "net.N13",
        pin7: "net.N13",
        pin3: "net.N14",
        pin8: "net.N34",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={-14.0}
      pcbY={-1.0}
      connections={{
        pin14: "net.N4",
        pin9: "net.N6",
        pin13: "net.N8",
        pin1: "net.N11",
        pin2: "net.N16",
        pin12: "net.N17",
        pin16: "net.N20",
        pin10: "net.N20",
        pin4: "net.N21",
        pin11: "net.N22",
        pin5: "net.N28",
        pin8: "net.N28",
        pin3: "net.N30",
        pin15: "net.N31",
        pin7: "net.N32",
        pin6: "net.N35",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={12.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N20",
        pin1: "net.N32",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={1.0}
      pcbY={3.5}
      connections={{
        pin2: "net.N4",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-4.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-4"
      footprint="soic16"
      pcbX={1.0}
      pcbY={12.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
        pin8: "net.N6",
        pin9: "net.N7",
        pin5: "net.N7",
        pin3: "net.N8",
        pin6: "net.N18",
        pin10: "net.N18",
        pin15: "net.N21",
        pin4: "net.N24",
        pin14: "net.N25",
        pin7: "net.N26",
        pin16: "net.N26",
        pin13: "net.N32",
        pin12: "net.N36",
        pin11: "net.N36",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic16"
      pcbX={13.5}
      pcbY={12.5}
      connections={{
        pin11: "net.N1",
        pin1: "net.N10",
        pin12: "net.N11",
        pin8: "net.N11",
        pin13: "net.N12",
        pin6: "net.N14",
        pin15: "net.N16",
        pin4: "net.N22",
        pin16: "net.N23",
        pin2: "net.N23",
        pin7: "net.N24",
        pin5: "net.N27",
        pin3: "net.N27",
        pin14: "net.N29",
        pin9: "net.N29",
        pin10: "net.N33",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-11.5}
      pcbY={11.5}
      connections={{
        pin1: "net.N2",
        pin4: "net.N14",
        pin2: "net.N24",
        pin3: "net.N32",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={5.5}
      pcbY={3.5}
      connections={{
        pin3: "net.N1",
        pin2: "net.N4",
        pin1: "net.N30",
      }}
      type="npn"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={12.0}
      pcbY={1.0}
      connections={{
        pin1: "net.N16",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={14.0}
      pcbY={-14.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-15.0}
      connections={{
        pin1: "net.N3",
        pin3: "net.N19",
        pin2: "net.N25",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={-4.0}
      pcbY={-15.0}
      connections={{
        pin2: "net.N4",
        pin5: "net.N5",
        pin3: "net.N8",
        pin6: "net.N10",
        pin1: "net.N14",
        pin4: "net.N33",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
