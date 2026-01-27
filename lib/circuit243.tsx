/** Randomly generated circuit 243. */
export default () => (
  <board width="32.00mm" height="58.00mm">
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N17",
        pin1: "net.N25",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.0}
      pcbY={-9.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N18",
        pin3: "net.N21",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-7.0}
      pcbY={7.0}
      connections={{
        pin4: "net.N4",
        pin7: "net.N5",
        pin8: "net.N6",
        pin1: "net.N8",
        pin5: "net.N10",
        pin3: "net.N13",
        pin6: "net.N19",
        pin2: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={3.0}
      pcbY={7.5}
      connections={{
        pin2: "net.N12",
        pin1: "net.N27",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N6",
        pin3: "net.N26",
        pin2: "net.N27",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={10.5}
      pcbY={1.5}
      connections={{
        pin1: "net.N11",
        pin2: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-10.0}
      pcbY={-2.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }}
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-1.5}
      pcbY={3.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={1.0}
      pcbY={-12.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={2.5}
      pcbY={3.5}
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-4.5}
      pcbY={-0.5}
      connections={{
        pin1: "net.N7",
        pin2: "net.N18",
      }}
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={9.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N20",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={5.0}
      pcbY={14.0}
      connections={{
        pin4: "net.N1",
        pin1: "net.N16",
        pin3: "net.N22",
        pin2: "net.N26",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-8.0}
      pcbY={12.5}
      connections={{
        pin5: "net.N4",
        pin1: "net.N6",
        pin3: "net.N11",
        pin2: "net.N11",
        pin4: "net.N16",
        pin6: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={10.0}
      pcbY={-10.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N24",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={5.0}
      pcbY={-2.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
        pin3: "net.N27",
      }}
      type="npn"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={-7.5}
      pcbY={-22.5}
      connections={{
        pin16: "net.N2",
        pin12: "net.N2",
        pin6: "net.N4",
        pin5: "net.N14",
        pin11: "net.N15",
        pin14: "net.N16",
        pin7: "net.N17",
        pin1: "net.N19",
        pin4: "net.N20",
        pin15: "net.N21",
        pin13: "net.N22",
        pin3: "net.N22",
        pin8: "net.N23",
        pin2: "net.N25",
        pin9: "net.N26",
        pin10: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-5"
      footprint="SOD-323"
      pcbX={-5.0}
      pcbY={2.5}
      connections={{
        pin2: "net.N12",
        pin1: "net.N20",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={12.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={12.0}
      pcbY={-18.0}
      connections={{
        pin2: "net.N14",
        pin1: "net.N18",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={-1.5}
      pcbY={6.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-2.5}
      pcbY={-6.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={-4.5}
      pcbY={24.0}
      connections={{
        pin5: "net.N4",
        pin4: "net.N18",
        pin2: "net.N19",
        pin1: "net.N23",
        pin6: "net.N23",
        pin3: "net.N25",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-9.5}
      pcbY={-15.0}
      connections={{
        pin1: "net.N10",
        pin3: "net.N13",
        pin2: "net.N20",
      }}
      type="npn"
    />
    <diode
      name="diode-6"
      footprint="SOD-323"
      pcbX={3.0}
      pcbY={-18.0}
      connections={{
        pin2: "net.N17",
        pin1: "net.N27",
      }}
    />
  </board>
)
