/** Randomly generated circuit 169. */
export default () => (
  <board width="20.00mm" height="20.00mm">
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={7.0}
      pcbY={-3.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={3.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-5.0}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={7.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={6.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-7.0}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin3: "net.N7",
        pin1: "net.N8",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={1.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N8",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-5.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N3",
        pin1: "net.N6",
      }}
      type="jfet"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={-5.0}
      pcbY={5.0}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin5: "net.N5",
        pin6: "net.N5",
        pin1: "net.N7",
        pin4: "net.N7",
        pin3: "net.N8",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
