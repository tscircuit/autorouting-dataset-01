/** Randomly generated circuit 106. */
export default () => (
  <board width="24.00mm" height="42.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={2.0}
      pcbY={-17.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={5.0}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={9.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={2.0}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-1.0}
      pcbY={12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={2.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={6.0}
      pcbY={-5.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-6"
      footprint="0805"
      pcbX={4.0}
      pcbY={18.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-8.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N14",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={3.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={8.0}
      pcbY={-9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={9.0}
      pcbY={12.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="pinrow8"
      pcbX={-9.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin7: "net.N2",
        pin2: "net.N3",
        pin6: "net.N7",
        pin4: "net.N8",
        pin3: "net.N8",
        pin1: "net.N8",
        pin8: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-5.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-7.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
        pin6: "net.N11",
        pin5: "net.N11",
        pin3: "net.N12",
        pin4: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={-5.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
