/** Randomly generated circuit 221. */
export default () => (
  <board width="44.00mm" height="44.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N12",
        pin1: "net.N18",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin7: "net.N2",
        pin5: "net.N4",
        pin6: "net.N5",
        pin2: "net.N7",
        pin3: "net.N8",
        pin8: "net.N8",
        pin1: "net.N16",
        pin4: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-4.0}
      pcbY={4.0}
      connections={{
        pin3: "net.N4",
        pin4: "net.N13",
        pin1: "net.N14",
        pin2: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-9.0}
      pcbY={9.0}
      connections={{
        pin6: "net.N6",
        pin1: "net.N8",
        pin5: "net.N9",
        pin2: "net.N12",
        pin4: "net.N16",
        pin3: "net.N18",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={6.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={12.0}
      pcbY={13.5}
      connections={{
        pin2: "net.N6",
        pin5: "net.N7",
        pin1: "net.N9",
        pin3: "net.N11",
        pin6: "net.N13",
        pin8: "net.N14",
        pin4: "net.N17",
        pin7: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={7.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={-8.5}
      pcbY={-1.0}
      connections={{
        pin4: "net.N1",
        pin2: "net.N3",
        pin3: "net.N10",
        pin1: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={8.0}
      pcbY={-13.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N15",
        pin3: "net.N17",
      }}
      type="npn"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={7.0}
      pcbY={6.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={2.0}
      pcbY={8.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={6.0}
      pcbY={9.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N11",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-15.0}
      pcbY={-15.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader2"
      pcbX={-7.0}
      pcbY={-13.0}
      connections={{
        pin2: "net.N16",
        pin1: "net.N17",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={12.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={3.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={15.0}
      pcbY={1.5}
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-18.0}
      pcbY={18.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={13.0}
      pcbY={7.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
    />
  </board>
)
