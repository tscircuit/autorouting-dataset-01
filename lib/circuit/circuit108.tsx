/** Randomly generated circuit 108. */
export default () => (
  <board width="30.00mm" height="30.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-6.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={10.0}
      pcbY={3.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={8.0}
      pcbY={-10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={4.0}
      pcbY={-10.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-12.0}
      pcbY={-4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-8.0}
      pcbY={11.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={3.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-10.0}
      pcbY={4.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-2.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-9.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N15",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={5.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-11.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={3.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N11",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={10.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin3: "net.N12",
        pin2: "net.N13",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={4.0}
      pcbY={8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
        pin3: "net.N14",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={12.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin3: "net.N11",
        pin2: "net.N12",
      }}
      type="pnp"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={4.0}
      pcbY={8.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N1",
        pin7: "net.N2",
        pin5: "net.N2",
        pin8: "net.N3",
        pin1: "net.N4",
        pin2: "net.N6",
        pin6: "net.N10",
        pin4: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={0.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={12.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
