/** Randomly generated circuit 101. */
export default () => (
  <board width="25.00mm" height="44.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={1.5}
      pcbY={17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-6.5}
      pcbY={19.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N13",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-4.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0402"
      pcbX={-8.5}
      pcbY={-2.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={8.5}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N19",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-7.5}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-0.5}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N16",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-7.5}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={6.5}
      pcbY={15.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={0.5}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={-3.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-7.5}
      pcbY={-19.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={2.5}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-9.5}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N9",
        pin2: "net.N15",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={4.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin3: "net.N11",
        pin1: "net.N15",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={2.5}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N10",
        pin3: "net.N18",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={2.5}
      pcbY={-11.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin6: "net.N1",
        pin1: "net.N7",
        pin4: "net.N11",
        pin3: "net.N13",
        pin8: "net.N13",
        pin2: "net.N14",
        pin5: "net.N14",
        pin7: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-9.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N2",
        pin2: "net.N4",
        pin1: "net.N10",
        pin5: "net.N11",
        pin6: "net.N12",
        pin3: "net.N13",
        pin7: "net.N14",
        pin8: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-9.5}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin4: "net.N12",
        pin2: "net.N17",
        pin3: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
