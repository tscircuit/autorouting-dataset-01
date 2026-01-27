/** Randomly generated circuit 290. */
export default () => (
  <board width="46.00mm" height="46.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N3",
        pin3: "net.N16",
        pin1: "net.N18",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin4: "net.N5",
        pin1: "net.N10",
        pin5: "net.N15",
        pin6: "net.N20",
        pin2: "net.N21",
        pin3: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={1.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={6.0}
      pcbY={-7.5}
      connections={{
        pin2: "net.N4",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-10.0}
      pcbY={9.0}
      connections={{
        pin3: "net.N3",
        pin1: "net.N11",
        pin2: "net.N12",
        pin6: "net.N16",
        pin4: "net.N19",
        pin5: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-7.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={7.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={2.0}
      pcbY={-3.5}
      connections={{
        pin1: "net.N8",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={4.5}
      pcbY={1.5}
      connections={{
        pin1: "net.N6",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={9.0}
      pcbY={8.0}
      connections={{
        pin1: "net.N1",
        pin5: "net.N3",
        pin8: "net.N8",
        pin2: "net.N10",
        pin3: "net.N11",
        pin7: "net.N16",
        pin6: "net.N17",
        pin4: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={2.0}
      pcbY={-6.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-12.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-1.0}
      pcbY={-11.5}
      connections={{
        pin1: "net.N4",
        pin4: "net.N5",
        pin2: "net.N6",
        pin5: "net.N9",
        pin6: "net.N12",
        pin3: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={12.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={-14.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N11",
        pin2: "net.N20",
      }}
    />
    <chip
      name="chip-4"
      footprint="pinrow8"
      pcbX={6.0}
      pcbY={13.5}
      connections={{
        pin7: "net.N3",
        pin8: "net.N5",
        pin3: "net.N10",
        pin5: "net.N14",
        pin2: "net.N14",
        pin6: "net.N15",
        pin4: "net.N21",
        pin1: "net.N22",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={8.0}
      pcbY={1.0}
      connections={{
        pin2: "net.N16",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={14.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
  </board>
)
