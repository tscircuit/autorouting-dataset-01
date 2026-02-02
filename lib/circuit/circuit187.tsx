/** Randomly generated circuit 187. */
export default () => (
  <board width="18.00mm" height="18.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={6.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={6.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N2",
        pin2: "net.N3",
      }}
      type="npn"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-4.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N3",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
