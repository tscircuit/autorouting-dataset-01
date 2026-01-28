/** Randomly generated circuit 148. */
export default () => (
  <board width="26.00mm" height="26.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={10.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={0.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={10.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-4.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
        pin3: "net.N10",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-4.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin3: "net.N2",
        pin1: "net.N8",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={10.0}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin3: "net.N6",
        pin2: "net.N9",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-6.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin6: "net.N1",
        pin5: "net.N3",
        pin1: "net.N5",
        pin4: "net.N8",
        pin2: "net.N8",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin5: "net.N5",
        pin3: "net.N6",
        pin4: "net.N7",
        pin2: "net.N8",
        pin6: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={8.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
