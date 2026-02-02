/** Randomly generated circuit 112. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={5.0}
      pcbY={-8.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={8.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-10.0}
      pcbY={-2.0}
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
      footprint="SOD-323"
      pcbX={-10.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-6.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin3: "net.N8",
        pin2: "net.N9",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={5.0}
      pcbY={6.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin5: "net.N1",
        pin1: "net.N5",
        pin2: "net.N6",
        pin3: "net.N6",
        pin6: "net.N8",
        pin4: "net.N9",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={0.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin2: "net.N3",
        pin1: "net.N3",
        pin3: "net.N6",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-10.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin4: "net.N2",
        pin1: "net.N5",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={4.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
