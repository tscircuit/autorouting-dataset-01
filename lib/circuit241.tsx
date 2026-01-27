/** Randomly generated circuit 241. */
export default () => (
  <board width="36.00mm" height="36.00mm">
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N14",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N15",
        pin2: "net.N21",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={1.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={1.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N13",
        pin2: "net.N19",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={-7.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={10.5}
      pcbY={3.0}
      connections={{
        pin4: "net.N2",
        pin2: "net.N2",
        pin6: "net.N8",
        pin5: "net.N8",
        pin1: "net.N9",
        pin8: "net.N14",
        pin3: "net.N15",
        pin7: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-5"
      footprint="SOD-323"
      pcbX={-8.0}
      pcbY={8.0}
      connections={{
        pin1: "net.N14",
        pin2: "net.N18",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={5.0}
      pcbY={11.0}
      connections={{
        pin5: "net.N5",
        pin6: "net.N9",
        pin1: "net.N10",
        pin3: "net.N17",
        pin4: "net.N19",
        pin2: "net.N21",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-13.5}
      pcbY={-13.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-4.5}
      pcbY={-13.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-6"
      footprint="SOD-123"
      pcbX={-10.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N11",
        pin2: "net.N16",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={7.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N19",
        pin1: "net.N20",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={2.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={0.5}
      pcbY={-3.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={6.5}
      connections={{
        pin3: "net.N4",
        pin1: "net.N10",
        pin2: "net.N17",
      }}
      type="npn"
    />
    <chip
      name="chip-3"
      footprint="soic8"
      pcbX={7.5}
      pcbY={-11.5}
      connections={{
        pin3: "net.N1",
        pin5: "net.N6",
        pin8: "net.N7",
        pin7: "net.N10",
        pin6: "net.N14",
        pin4: "net.N15",
        pin2: "net.N16",
        pin1: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-13.0}
      pcbY={-8.0}
      connections={{
        pin1: "net.N12",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-5"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={12.0}
      connections={{
        pin5: "net.N3",
        pin3: "net.N6",
        pin1: "net.N18",
        pin6: "net.N18",
        pin4: "net.N20",
        pin2: "net.N20",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
