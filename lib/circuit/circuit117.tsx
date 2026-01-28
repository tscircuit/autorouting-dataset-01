/** Randomly generated circuit 117. */
export default () => (
  <board width="42.00mm" height="24.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-7.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-14.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={14.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-18.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-14.0}
      pcbY={5.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N13",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-9.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={2.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-1.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={8.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N11",
        pin2: "net.N13",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={10.0}
      pcbY={3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin3: "net.N15",
        pin2: "net.N16",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={14.0}
      pcbY={-7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N9",
        pin2: "net.N16",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={0.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N2",
        pin6: "net.N4",
        pin2: "net.N4",
        pin5: "net.N5",
        pin1: "net.N13",
        pin4: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-14.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin3: "net.N3",
        pin4: "net.N6",
        pin2: "net.N8",
        pin6: "net.N11",
        pin1: "net.N14",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={-4.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N2",
        pin1: "net.N3",
        pin6: "net.N7",
        pin4: "net.N12",
        pin5: "net.N14",
        pin2: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
