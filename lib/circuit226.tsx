/** Randomly generated circuit 226. */
export default () => (
  <board width="38.00mm" height="38.00mm">
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin4: "net.N1",
        pin2: "net.N3",
        pin7: "net.N3",
        pin8: "net.N4",
        pin3: "net.N5",
        pin5: "net.N15",
        pin1: "net.N16",
        pin6: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-5.5}
      pcbY={-5.5}
      connections={{
        pin2: "net.N4",
        pin5: "net.N5",
        pin6: "net.N5",
        pin8: "net.N8",
        pin4: "net.N9",
        pin3: "net.N12",
        pin7: "net.N13",
        pin1: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={-10.0}
      pcbY={10.0}
      connections={{
        pin4: "net.N2",
        pin8: "net.N6",
        pin2: "net.N6",
        pin5: "net.N9",
        pin1: "net.N10",
        pin6: "net.N11",
        pin3: "net.N15",
        pin7: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={3.0}
      pcbY={9.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={3.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N8",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={9.0}
      pcbY={-9.0}
      connections={{
        pin2: "net.N12",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={1.5}
      pcbY={4.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={6.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N14",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={11.0}
      pcbY={10.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-11.0}
      pcbY={-11.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
        pin4: "net.N11",
        pin3: "net.N13",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={-15.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={2.5}
      pcbY={-10.5}
      connections={{
        pin3: "net.N10",
        pin2: "net.N14",
        pin1: "net.N16",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-12.0}
      pcbY={1.5}
      connections={{
        pin3: "net.N3",
        pin1: "net.N11",
        pin2: "net.N11",
      }}
      type="npn"
    />
  </board>
)
