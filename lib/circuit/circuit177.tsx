/** Randomly generated circuit 177. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={-7.0}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={4.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-2.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-3.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={-1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={3.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N4",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={4.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={3.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N2",
        pin4: "net.N5",
        pin1: "net.N6",
        pin2: "net.N6",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
