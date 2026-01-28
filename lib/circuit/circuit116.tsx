/** Randomly generated circuit 116. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={9.0}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={4.0}
      pcbY={-2.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-2.0}
      pcbY={6.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N3",
        pin1: "net.N7",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-10.0}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin3: "net.N5",
        pin1: "net.N6",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-2.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N5",
      }}
      type="npn"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={8.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N8",
        pin3: "net.N8",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={-10.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={-2.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={-6.0}
      pcbY={8.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
