/** Randomly generated circuit 240. */
export default () => (
  <board width="50.00mm" height="50.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N17",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-4.0}
      pcbY={-4.0}
      connections={{
        pin4: "net.N3",
        pin7: "net.N4",
        pin6: "net.N5",
        pin2: "net.N7",
        pin3: "net.N9",
        pin5: "net.N9",
        pin8: "net.N16",
        pin1: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-6.0}
      pcbY={6.0}
      connections={{
        pin6: "net.N1",
        pin4: "net.N6",
        pin2: "net.N8",
        pin3: "net.N18",
        pin1: "net.N22",
        pin5: "net.N23",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={7.0}
      pcbY={2.0}
      connections={{
        pin3: "net.N10",
        pin1: "net.N11",
        pin2: "net.N22",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={12.0}
      pcbY={-12.0}
      connections={{
        pin1: "net.N7",
        pin3: "net.N17",
        pin2: "net.N24",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={7.0}
      pcbY={8.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={-15.0}
      pcbY={15.0}
      connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin4: "net.N6",
        pin7: "net.N6",
        pin2: "net.N13",
        pin6: "net.N17",
        pin5: "net.N20",
        pin8: "net.N23",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-4.5}
      pcbY={-12.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={1.0}
      pcbY={-10.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={-1.5}
      pcbY={15.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N24",
      }}
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={9.0}
      pcbY={14.0}
      connections={{
        pin2: "net.N4",
        pin4: "net.N9",
        pin6: "net.N13",
        pin1: "net.N18",
        pin5: "net.N19",
        pin3: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="dip8"
      pcbX={14.5}
      pcbY={-4.0}
      connections={{
        pin6: "net.N3",
        pin1: "net.N6",
        pin2: "net.N9",
        pin5: "net.N12",
        pin3: "net.N14",
        pin7: "net.N18",
        pin4: "net.N19",
        pin8: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-18.0}
      pcbY={-4.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-3.5}
      pcbY={0.0}
      connections={{
        pin2: "net.N12",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-19.5}
      pcbY={-19.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N11",
        pin3: "net.N21",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={13.5}
      pcbY={6.5}
      connections={{
        pin3: "net.N11",
        pin1: "net.N17",
        pin2: "net.N24",
      }}
      type="npn"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={5.5}
      pcbY={-2.0}
      connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={-9.0}
      pcbY={1.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N18",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
