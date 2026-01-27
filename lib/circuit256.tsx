/** Randomly generated circuit 256. */
export default () => (
  <board width="60.00mm" height="60.00mm">
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N15",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-4.5}
      pcbY={-4.5}
      connections={{
        pin2: "net.N1",
        pin3: "net.N11",
        pin1: "net.N17",
      }}
      type="npn"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-3.5}
      pcbY={3.5}
      connections={{
        pin1: "net.N10",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={3.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N23",
        pin2: "net.N24",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={0.5}
      pcbY={3.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={7.5}
      pcbY={-9.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N25",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-10.5}
      pcbY={10.5}
      connections={{
        pin1: "net.N18",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={7.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N24",
      }}
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-15.0}
      pcbY={-15.0}
      connections={{
        pin5: "net.N2",
        pin6: "net.N13",
        pin3: "net.N16",
        pin4: "net.N20",
        pin1: "net.N25",
        pin2: "net.N26",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={12.0}
      pcbY={4.5}
      connections={{
        pin2: "net.N6",
        pin1: "net.N26",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-5.0}
      pcbY={9.0}
      connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={2.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N9",
        pin2: "net.N11",
        pin3: "net.N16",
      }}
      type="npn"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={-10.0}
      connections={{
        pin2: "net.N1",
        pin3: "net.N8",
        pin1: "net.N8",
        pin5: "net.N17",
        pin4: "net.N20",
        pin6: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={12.0}
      pcbY={12.0}
      connections={{
        pin2: "net.N21",
        pin1: "net.N22",
      }}
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-10.0}
      pcbY={2.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-4.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N12",
        pin1: "net.N19",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={0.0}
      pcbY={-11.0}
      connections={{
        pin2: "net.N19",
        pin1: "net.N26",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-5"
      footprint="SOD-123"
      pcbX={2.0}
      pcbY={12.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-14.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N14",
        pin3: "net.N14",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={6.0}
      pcbY={1.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={18.0}
      pcbY={-18.0}
      connections={{
        pin2: "net.N3",
        pin5: "net.N3",
        pin6: "net.N3",
        pin3: "net.N10",
        pin4: "net.N10",
        pin8: "net.N13",
        pin1: "net.N17",
        pin7: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={7.5}
      pcbY={5.0}
      connections={{
        pin1: "net.N16",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-4"
      footprint="0805"
      pcbX={-8.0}
      pcbY={5.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-6"
      footprint="SOD-123"
      pcbX={7.5}
      pcbY={8.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
    />
    <chip
      name="chip-4"
      footprint="pinrow8"
      pcbX={-14.5}
      pcbY={14.5}
      connections={{
        pin4: "net.N1",
        pin6: "net.N4",
        pin7: "net.N5",
        pin3: "net.N9",
        pin2: "net.N14",
        pin8: "net.N17",
        pin5: "net.N20",
        pin1: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-1.5}
      pcbY={-18.0}
      connections={{
        pin2: "net.N22",
        pin3: "net.N23",
        pin1: "net.N26",
      }}
      type="npn"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={11.0}
      pcbY={-5.0}
      connections={{
        pin2: "net.N12",
        pin1: "net.N24",
      }}
      resistance="1k"
    />
  </board>
)
