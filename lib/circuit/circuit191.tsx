/** Randomly generated circuit 191. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-16.0}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-3.0}
      pcbY={-18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={6.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={8.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-14.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-8.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-6.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={3.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N14",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-12.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={-14.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N18",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={16.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
        pin3: "net.N13",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-6.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin1: "net.N8",
        pin2: "net.N14",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={10.0}
      pcbY={-18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
        pin3: "net.N13",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={-14.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N1",
        pin5: "net.N1",
        pin2: "net.N3",
        pin3: "net.N8",
        pin1: "net.N9",
        pin4: "net.N12",
        pin6: "net.N17",
        pin7: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={8.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin2: "net.N9",
        pin1: "net.N12",
        pin5: "net.N13",
        pin6: "net.N16",
        pin3: "net.N16",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={-8.0}
      pcbY={-18.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={16.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin5: "net.N7",
        pin2: "net.N15",
        pin6: "net.N16",
        pin3: "net.N18",
        pin1: "net.N19",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader6"
      pcbX={18.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin5: "net.N6",
        pin3: "net.N6",
        pin4: "net.N9",
        pin6: "net.N10",
        pin1: "net.N19",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
