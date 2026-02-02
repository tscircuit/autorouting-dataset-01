/** Randomly generated circuit 135. */
export default () => (
  <board width="32.00mm" height="19.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-5.0}
      pcbY={4.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={6.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={0.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={3.0}
      pcbY={0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-12.0}
      pcbY={-2.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-9.0}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-1.0}
      pcbY={0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={5.0}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
        pin3: "net.N5",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={13.0}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      type="jfet"
    />
    <chip
      name="chip-2"
      footprint="pinrow8"
      pcbX={7.0}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N2",
        pin3: "net.N3",
        pin1: "net.N7",
        pin5: "net.N8",
        pin6: "net.N8",
        pin8: "net.N8",
        pin4: "net.N9",
        pin2: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
