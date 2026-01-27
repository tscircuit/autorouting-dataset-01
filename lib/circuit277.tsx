/** Randomly generated circuit 277. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-1.5}
      pcbY={-9.0}
      connections={{
        pin3: "net.N1",
        pin6: "net.N3",
        pin4: "net.N6",
        pin1: "net.N7",
        pin2: "net.N8",
        pin5: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-7.5}
      pcbY={7.5}
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-2.5}
      pcbY={-4.0}
      connections={{
        pin2: "net.N3",
        pin7: "net.N5",
        pin3: "net.N6",
        pin5: "net.N9",
        pin8: "net.N10",
        pin1: "net.N12",
        pin4: "net.N13",
        pin6: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={6.0}
      pcbY={7.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-7.5}
      pcbY={15.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={0.0}
      pcbY={15.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-1.5}
      pcbY={-14.0}
      connections={{
        pin2: "net.N2",
        pin5: "net.N3",
        pin6: "net.N10",
        pin4: "net.N12",
        pin3: "net.N14",
        pin1: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={5.5}
      pcbY={1.5}
      connections={{
        pin2: "net.N3",
        pin6: "net.N4",
        pin7: "net.N4",
        pin8: "net.N5",
        pin4: "net.N6",
        pin3: "net.N12",
        pin5: "net.N13",
        pin1: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.0}
      pcbY={6.5}
      connections={{
        pin3: "net.N1",
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={7.5}
      pcbY={15.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
  </board>
)
