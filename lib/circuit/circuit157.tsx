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
        pin2: "net.N7",
        pin1: "net.N9",
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
        pin1: "net.N3",
        pin2: "net.N6",
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
        pin2: "net.N3",
        pin1: "net.N6",
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
        pin1: "net.N11",
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
        pin1: "net.N1",
        pin2: "net.N3",
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
        pin2: "net.N2",
        pin1: "net.N8",
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
        pin1: "net.N2",
        pin2: "net.N9",
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
        pin1: "net.N4",
        pin2: "net.N13",
        pin3: "net.N13",
      }}
      type="pnp"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={7.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin1: "net.N7",
        pin4: "net.N8",
        pin6: "net.N11",
        pin3: "net.N12",
        pin2: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={3.5}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader2"
      pcbX={-6.5}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={-0.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-6"
      footprint="pinheader6"
      pcbX={-2.5}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin6: "net.N3",
        pin1: "net.N6",
        pin5: "net.N7",
        pin4: "net.N10",
        pin2: "net.N11",
        pin3: "net.N12",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
