/** Randomly generated circuit 179. */
export default () => (
  <board width="42.00mm" height="24.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={12.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={3.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0603"
      pcbX={4.0}
      pcbY={4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={6.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={9.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-12.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={4.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={-15.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-5.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-8.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-1.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-16.0}
      pcbY={-1.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N13",
        pin3: "net.N15",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-2.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
        pin3: "net.N11",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={14.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N8",
        pin3: "net.N8",
        pin6: "net.N9",
        pin1: "net.N11",
        pin5: "net.N13",
        pin2: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={14.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin6: "net.N1",
        pin1: "net.N2",
        pin5: "net.N4",
        pin2: "net.N6",
        pin3: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
