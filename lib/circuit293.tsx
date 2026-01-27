/** Randomly generated circuit 293. */
export default () => (
  <board width="44.00mm" height="44.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N16",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-4.5}
      pcbY={4.5}
      connections={{
        pin3: "net.N13",
        pin1: "net.N15",
        pin2: "net.N16",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={3.0}
      pcbY={-7.5}
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
        pin3: "net.N19",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={8.0}
      pcbY={7.0}
      connections={{
        pin14: "net.N1",
        pin1: "net.N2",
        pin12: "net.N2",
        pin2: "net.N3",
        pin8: "net.N3",
        pin9: "net.N6",
        pin3: "net.N8",
        pin4: "net.N8",
        pin11: "net.N9",
        pin7: "net.N11",
        pin16: "net.N12",
        pin6: "net.N15",
        pin13: "net.N16",
        pin5: "net.N19",
        pin10: "net.N20",
        pin15: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={6.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={10.0}
      pcbY={-10.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }}
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={-13.5}
      pcbY={-15.0}
      connections={{
        pin1: "net.N3",
        pin6: "net.N4",
        pin4: "net.N4",
        pin5: "net.N11",
        pin3: "net.N17",
        pin2: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-10.0}
      pcbY={-10.0}
      connections={{
        pin6: "net.N7",
        pin5: "net.N9",
        pin1: "net.N9",
        pin3: "net.N14",
        pin2: "net.N15",
        pin4: "net.N16",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-13.5}
      pcbY={13.5}
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-1.5}
      pcbY={-3.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N17",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-4.5}
      pcbY={13.5}
      connections={{
        pin2: "net.N13",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={12.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N18",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-13.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={4.0}
      pcbY={1.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={3.0}
      pcbY={-13.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
      }}
    />
    <diode
      name="diode-5"
      footprint="SOD-123"
      pcbX={-6.0}
      pcbY={-2.5}
      connections={{
        pin2: "net.N5",
        pin1: "net.N18",
      }}
    />
    <chip
      name="chip-4"
      footprint="pinrow6"
      pcbX={6.0}
      pcbY={15.0}
      connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin4: "net.N6",
        pin1: "net.N7",
        pin5: "net.N8",
        pin6: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
