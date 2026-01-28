/** Randomly generated circuit 183. */
export default () => (
  <board width="15.00mm" height="24.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-3.5}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={1.5}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={3.5}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-4.5}
      pcbY={-1.0}
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
      pcbX={-0.5}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={2.5}
      pcbY={3.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-2.5}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N5",
        pin1: "net.N6",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={1.5}
      pcbY={9.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin5: "net.N3",
        pin3: "net.N4",
        pin1: "net.N5",
        pin2: "net.N6",
        pin4: "net.N6",
        pin6: "net.N7",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
