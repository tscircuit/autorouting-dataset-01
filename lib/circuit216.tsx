/** Randomly generated circuit 216. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-9.0}
      pcbY={-9.0}
      connections={{
        pin1: "net.N14",
        pin2: "net.N16",
      }}
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-4.0}
      pcbY={-4.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-8.0}
      pcbY={8.0}
      connections={{
        pin9: "net.N1",
        pin7: "net.N1",
        pin13: "net.N2",
        pin5: "net.N2",
        pin1: "net.N2",
        pin15: "net.N5",
        pin12: "net.N6",
        pin2: "net.N7",
        pin3: "net.N8",
        pin8: "net.N8",
        pin11: "net.N11",
        pin10: "net.N11",
        pin14: "net.N12",
        pin16: "net.N16",
        pin4: "net.N16",
        pin6: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={2.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={0.5}
      pcbY={4.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={9.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={10.5}
      pcbY={-10.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={10.5}
      pcbY={-3.0}
      connections={{
        pin3: "net.N12",
        pin2: "net.N14",
        pin1: "net.N17",
      }}
      type="npn"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={10.5}
      pcbY={16.5}
      connections={{
        pin6: "net.N4",
        pin3: "net.N7",
        pin8: "net.N8",
        pin5: "net.N11",
        pin2: "net.N11",
        pin7: "net.N12",
        pin4: "net.N15",
        pin1: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-6.0}
      pcbY={-0.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={-1.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinheader4"
      pcbX={10.0}
      pcbY={1.0}
      connections={{
        pin4: "net.N3",
        pin2: "net.N4",
        pin1: "net.N13",
        pin3: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinheader4"
      pcbX={-13.0}
      pcbY={-15.0}
      connections={{
        pin4: "net.N5",
        pin3: "net.N10",
        pin2: "net.N10",
        pin1: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-1.5}
      connections={{
        pin2: "net.N3",
        pin3: "net.N5",
        pin1: "net.N9",
      }}
      type="npn"
    />
  </board>
)
