/** Randomly generated circuit 172. */
export default () => (
  <board width="17.00mm" height="17.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-2.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0805"
      pcbX={-5.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={1.5}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={4.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N6",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-4.5}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-0.5}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={0.5}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-5.5}
      pcbY={-3.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N2",
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      type="jfet"
    />
  </board>
)
