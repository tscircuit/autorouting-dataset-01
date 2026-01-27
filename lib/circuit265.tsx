/** Randomly generated circuit 265. */
export default () => (
  <board width="23.00mm" height="40.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin4: "net.N7",
        pin3: "net.N8",
        pin2: "net.N9",
        pin5: "net.N10",
        pin6: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-3.5}
      pcbY={-5.5}
      connections={{
        pin2: "net.N1",
        pin15: "net.N1",
        pin10: "net.N2",
        pin9: "net.N4",
        pin3: "net.N5",
        pin12: "net.N6",
        pin8: "net.N7",
        pin7: "net.N8",
        pin6: "net.N8",
        pin5: "net.N9",
        pin14: "net.N11",
        pin1: "net.N12",
        pin11: "net.N13",
        pin16: "net.N13",
        pin13: "net.N13",
        pin4: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-7.5}
      pcbY={9.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={1.5}
      pcbY={9.0}
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-3.5}
      pcbY={5.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin4: "net.N4",
        pin3: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={7.0}
      pcbY={-7.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N13",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-5.0}
      pcbY={-14.0}
      connections={{
        pin3: "net.N8",
        pin2: "net.N12",
        pin1: "net.N14",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={4.0}
      pcbY={-13.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={-6.0}
      pcbY={15.0}
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={2.0}
      pcbY={14.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
  </board>
)
