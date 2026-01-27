/** Randomly generated circuit 283. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N9",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-7.5}
      pcbY={-7.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-6.0}
      pcbY={-2.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-6.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-1.0}
      pcbY={10.0}
      connections={{
        pin3: "net.N1",
        pin1: "net.N6",
        pin6: "net.N8",
        pin5: "net.N8",
        pin2: "net.N9",
        pin4: "net.N10",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={2.0}
      pcbY={-6.0}
      connections={{
        pin6: "net.N1",
        pin4: "net.N2",
        pin5: "net.N2",
        pin3: "net.N3",
        pin7: "net.N7",
        pin1: "net.N8",
        pin2: "net.N10",
        pin8: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-7.5}
      pcbY={-15.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={1.5}
      pcbY={-15.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={6.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0402"
      pcbX={-2.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={1.5}
      pcbY={3.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={5.5}
      pcbY={3.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0805"
      pcbX={-1.5}
      pcbY={6.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-10.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
  </board>
)
