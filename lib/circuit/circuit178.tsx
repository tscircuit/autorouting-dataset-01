/** Randomly generated circuit 178. */
export default () => (
  <board width="31.00mm" height="31.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-6.5}
      pcbY={9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={12.5}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N18",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={-1.5}
      pcbY={9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N18",
        pin2: "net.N27",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={12.5}
      pcbY={-9.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={12.5}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N23",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={10.5}
      pcbY={12.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={5.5}
      pcbY={3.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N14",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-8.5}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N19",
        pin1: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-5.5}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0805"
      pcbX={0.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N12",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0402"
      pcbX={9.5}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N18",
        pin1: "net.N24",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-7"
      footprint="0805"
      pcbX={5.5}
      pcbY={-1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-6.5}
      pcbY={-12.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-0.5}
      pcbY={-0.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-0.5}
      pcbY={11.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N24",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={10.5}
      pcbY={-0.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N23",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-8.5}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N23",
        pin3: "net.N26",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={1.5}
      pcbY={-12.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N3",
        pin2: "net.N14",
        pin1: "net.N22",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={7.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N4",
        pin1: "net.N21",
        pin2: "net.N26",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-0.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N22",
      }}
      type="npn"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={11.5}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N6",
        pin1: "net.N25",
        pin2: "net.N27",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-6"
      footprint="SOT-23"
      pcbX={-6.5}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N8",
        pin1: "net.N27",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={-12.5}
      pcbY={-8.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N2",
        pin1: "net.N7",
        pin8: "net.N9",
        pin7: "net.N11",
        pin2: "net.N12",
        pin5: "net.N16",
        pin6: "net.N19",
        pin4: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-0.5}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N5",
        pin8: "net.N7",
        pin4: "net.N9",
        pin5: "net.N10",
        pin3: "net.N12",
        pin6: "net.N16",
        pin2: "net.N26",
        pin1: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="soic16"
      pcbX={-12.5}
      pcbY={11.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin13: "net.N4",
        pin5: "net.N6",
        pin15: "net.N7",
        pin10: "net.N11",
        pin8: "net.N11",
        pin11: "net.N15",
        pin9: "net.N15",
        pin3: "net.N15",
        pin16: "net.N18",
        pin7: "net.N20",
        pin12: "net.N20",
        pin14: "net.N21",
        pin6: "net.N21",
        pin4: "net.N21",
        pin2: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
