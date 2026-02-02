/** Randomly generated circuit 175. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={-16.0}
      pcbY={-1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-4.0}
      pcbY={-5.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={15.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-10.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-9.0}
      pcbY={7.5}
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
      footprint="0603"
      pcbX={-1.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-9.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={9.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0402"
      pcbX={-3.0}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-14.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-3.0}
      pcbY={6.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={12.0}
      pcbY={-1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={13.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-5.0}
      pcbY={1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N12",
        pin2: "net.N13",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={5.0}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N5",
        pin4: "net.N5",
        pin2: "net.N5",
        pin5: "net.N7",
        pin1: "net.N10",
        pin3: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
