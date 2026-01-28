/** Randomly generated circuit 111. */
export default () => (
  <board width="40.00mm" height="40.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={4.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={16.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-1.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={7.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-15.0}
      pcbY={13.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-3.0}
      pcbY={-15.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={13.0}
      pcbY={17.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={-3.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N13",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={15.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin1: "net.N10",
        pin2: "net.N16",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={17.0}
      pcbY={-15.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin3: "net.N16",
        pin1: "net.N16",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-9.0}
      pcbY={-15.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N7",
        pin1: "net.N8",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-15.0}
      pcbY={-1.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin3: "net.N11",
        pin1: "net.N13",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N11",
        pin3: "net.N14",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-5.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N2",
        pin8: "net.N3",
        pin2: "net.N5",
        pin4: "net.N8",
        pin6: "net.N9",
        pin3: "net.N12",
        pin5: "net.N12",
        pin1: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={-17.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N3",
        pin1: "net.N4",
        pin8: "net.N10",
        pin6: "net.N12",
        pin5: "net.N14",
        pin2: "net.N15",
        pin3: "net.N15",
        pin4: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="soic8"
      pcbX={-17.0}
      pcbY={-9.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin6: "net.N1",
        pin2: "net.N1",
        pin8: "net.N2",
        pin3: "net.N3",
        pin4: "net.N8",
        pin7: "net.N9",
        pin5: "net.N10",
        pin1: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
