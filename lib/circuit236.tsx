/** Randomly generated circuit 236. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-4.0}
      pcbY={-6.0}
      connections={{
        pin4: "net.N2",
        pin1: "net.N4",
        pin2: "net.N6",
        pin3: "net.N7",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={3.0}
      connections={{
        pin2: "net.N7",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={3.0}
      pcbY={6.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-7.5}
      pcbY={10.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N2",
      }}
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-4.0}
      pcbY={-2.0}
      connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={0.5}
      pcbY={3.0}
      connections={{
        pin1: "net.N11",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={3.0}
      pcbY={12.0}
      connections={{
        pin5: "net.N4",
        pin2: "net.N5",
        pin4: "net.N6",
        pin6: "net.N9",
        pin1: "net.N11",
        pin3: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={7.0}
      pcbY={-7.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={7.0}
      pcbY={-1.0}
      connections={{
        pin3: "net.N6",
        pin2: "net.N8",
        pin1: "net.N12",
      }}
      type="npn"
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={-7.0}
      pcbY={-12.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={1.5}
      pcbY={-15.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={7.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={4.0}
      pcbY={2.5}
      connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
  </board>
)
