/** Randomly generated circuit 292. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N10",
        pin2: "net.N12",
        pin3: "net.N14",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-7.0}
      pcbY={-7.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-4.5}
      pcbY={4.5}
      connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={1.5}
      pcbY={-9.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={3.0}
      pcbY={8.0}
      connections={{
        pin7: "net.N5",
        pin2: "net.N6",
        pin4: "net.N11",
        pin1: "net.N12",
        pin3: "net.N13",
        pin5: "net.N13",
        pin6: "net.N14",
        pin8: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-12.0}
      pcbY={13.5}
      connections={{
        pin2: "net.N2",
        pin4: "net.N7",
        pin3: "net.N9",
        pin1: "net.N10",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={12.0}
      pcbY={-12.0}
      connections={{
        pin3: "net.N5",
        pin1: "net.N10",
        pin2: "net.N17",
      }}
      type="npn"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-8.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={11.0}
      pcbY={-4.0}
      connections={{
        pin3: "net.N4",
        pin1: "net.N8",
        pin2: "net.N16",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-11.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N18",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={13.5}
      pcbY={4.5}
      connections={{
        pin2: "net.N7",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={-13.0}
      pcbY={-13.0}
      connections={{
        pin2: "net.N16",
        pin1: "net.N17",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={-2.5}
      pcbY={-4.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={-8.5}
      pcbY={8.5}
      connections={{
        pin1: "net.N3",
        pin3: "net.N12",
        pin4: "net.N16",
        pin2: "net.N16",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-3"
      footprint="dip8"
      pcbX={11.5}
      pcbY={11.0}
      connections={{
        pin4: "net.N1",
        pin7: "net.N5",
        pin2: "net.N6",
        pin6: "net.N11",
        pin5: "net.N13",
        pin8: "net.N14",
        pin3: "net.N15",
        pin1: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic16"
      pcbX={-3.0}
      pcbY={-13.5}
      connections={{
        pin13: "net.N1",
        pin7: "net.N2",
        pin2: "net.N2",
        pin5: "net.N3",
        pin8: "net.N4",
        pin1: "net.N4",
        pin15: "net.N7",
        pin3: "net.N8",
        pin10: "net.N8",
        pin9: "net.N9",
        pin6: "net.N10",
        pin14: "net.N11",
        pin12: "net.N13",
        pin16: "net.N15",
        pin4: "net.N17",
        pin11: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
