/** Randomly generated circuit 132. */
export default () => (
  <board width="22.00mm" height="22.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={3.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={8.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-6.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={4.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
        pin3: "net.N5",
      }}
      type="bjt"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-6.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N3",
        pin1: "net.N6",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={-6.0}
      pcbY={8.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N2",
        pin3: "net.N3",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={6.0}
      pcbY={4.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
