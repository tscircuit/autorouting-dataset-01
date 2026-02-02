/** Randomly generated circuit 157. */
export default () => (
  <board width="23.00mm" height="23.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={-3.5}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-7.5}
      pcbY={0.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={0.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-6.5}
      pcbY={6.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={5.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-8.5}
      pcbY={-4.5}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-8.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-0.5}
      pcbY={-8.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin2: "net.N10",
        pin1: "net.N10",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={3.5}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={-6.5}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={1.5}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-0.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinrow6"
      pcbX={-2.5}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin5: "net.N1",
        pin2: "net.N4",
        pin6: "net.N4",
        pin4: "net.N7",
        pin3: "net.N9",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
