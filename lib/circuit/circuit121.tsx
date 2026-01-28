/** Randomly generated circuit 121. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-1.0}
      pcbY={5.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={4.0}
      pcbY={7.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-10.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={3.0}
      pcbY={11.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-7.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={0.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-11.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin3: "net.N4",
        pin2: "net.N7",
      }}
      type="npn"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={5.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N7",
      }}
      type="bjt"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={-3.0}
      pcbY={-5.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin4: "net.N6",
        pin3: "net.N7",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-11.0}
      pcbY={-9.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin2: "net.N4",
        pin1: "net.N8",
        pin3: "net.N10",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader6"
      pcbX={9.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin3: "net.N2",
        pin5: "net.N3",
        pin1: "net.N6",
        pin6: "net.N10",
        pin2: "net.N10",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
