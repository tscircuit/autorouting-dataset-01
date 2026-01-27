/** Randomly generated circuit 267. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-12.0}
      pcbY={-6.0}
      connections={{
        pin3: "net.N2",
        pin4: "net.N7",
        pin2: "net.N10",
        pin1: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-10.0}
      pcbY={2.0}
      connections={{
        pin13: "net.N1",
        pin2: "net.N2",
        pin5: "net.N2",
        pin1: "net.N3",
        pin9: "net.N5",
        pin7: "net.N6",
        pin3: "net.N7",
        pin15: "net.N8",
        pin16: "net.N8",
        pin12: "net.N8",
        pin8: "net.N9",
        pin14: "net.N10",
        pin10: "net.N10",
        pin11: "net.N10",
        pin6: "net.N11",
        pin4: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={1.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={4.0}
      pcbY={-6.0}
      connections={{
        pin1: "net.N7",
        pin3: "net.N9",
        pin2: "net.N11",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={9.0}
      pcbY={1.5}
      connections={{
        pin1: "net.N4",
        pin2: "net.N11",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={11.0}
      pcbY={-7.0}
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={13.0}
      pcbY={7.0}
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={15.0}
      pcbY={-1.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={4.0}
      pcbY={-2.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      resistance="1k"
    />
  </board>
)
