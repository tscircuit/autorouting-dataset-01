/** Randomly generated circuit 118. */
export default () => (
  <board width="48.00mm" height="27.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-7.0}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={7.0}
      pcbY={8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N18",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={1.0}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={13.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={11.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={17.0}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-18.0}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={-13.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-13.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={13.0}
      pcbY={7.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-13.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N12",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={6.0}
      pcbY={0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-11.0}
      pcbY={8.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={-18.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N16",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={7.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N11",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-1.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N14",
        pin3: "net.N17",
      }}
      type="bjt"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-1.0}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin8: "net.N8",
        pin1: "net.N9",
        pin4: "net.N11",
        pin7: "net.N13",
        pin5: "net.N13",
        pin3: "net.N14",
        pin6: "net.N15",
        pin2: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={19.0}
      pcbY={7.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N18",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-17.0}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin4: "net.N3",
        pin2: "net.N4",
        pin6: "net.N5",
        pin3: "net.N13",
        pin5: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
