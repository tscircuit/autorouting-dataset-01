/** Randomly generated circuit 104. */
export default () => (
  <board width="42.00mm" height="24.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={10.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-2.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={15.0}
      pcbY={-1.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-11.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-16.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-14.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-12.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-8.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N16",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={-8.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N16",
        pin1: "net.N17",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={10.0}
      pcbY={3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-16.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N6",
        pin3: "net.N11",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={6.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N9",
        pin1: "net.N15",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={18.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin1: "net.N6",
        pin2: "net.N12",
        pin4: "net.N13",
        pin3: "net.N13",
        pin6: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow6"
      pcbX={-18.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin2: "net.N2",
        pin3: "net.N4",
        pin5: "net.N8",
        pin6: "net.N12",
        pin1: "net.N13",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-5"
      footprint="soic8"
      pcbX={10.0}
      pcbY={7.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin8: "net.N2",
        pin2: "net.N4",
        pin1: "net.N7",
        pin7: "net.N7",
        pin3: "net.N10",
        pin5: "net.N11",
        pin6: "net.N12",
        pin4: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={0.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
