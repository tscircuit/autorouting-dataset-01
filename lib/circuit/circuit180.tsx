/** Randomly generated circuit 180. */
export default () => (
  <board width="19.00mm" height="32.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-0.5}
      pcbY={-12.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-6.5}
      pcbY={-10.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={6.5}
      pcbY={-3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={0.5}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={-6.5}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N5",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={-1.5}
      pcbY={7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-123"
      pcbX={-0.5}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-6.5}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin1: "net.N2",
        pin2: "net.N2",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={5.5}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
        pin3: "net.N5",
      }}
      type="bjt"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={5.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
