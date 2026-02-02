/** Randomly generated circuit 198. */
export default () => (
  <board width="31.00mm" height="31.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={1.5}
      pcbY={2.5}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.5}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={3.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-7.5}
      pcbY={11.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-11.5}
      pcbY={8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0603"
      pcbX={-6.5}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={5.5}
      pcbY={11.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={3.5}
      pcbY={3.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-2.5}
      pcbY={-12.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-10.5}
      pcbY={-12.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0805"
      pcbX={11.5}
      pcbY={9.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0603"
      pcbX={-2.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-7"
      footprint="0402"
      pcbX={-4.5}
      pcbY={1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={0.5}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={10.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-7.5}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N6",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-9.5}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={7.5}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N10",
        pin3: "net.N12",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={11.5}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
        pin3: "net.N14",
      }}
      type="pnp"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow6"
      pcbX={5.5}
      pcbY={-12.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin2: "net.N4",
        pin5: "net.N5",
        pin4: "net.N11",
        pin6: "net.N13",
        pin1: "net.N16",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-10.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={3.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
  </board>
)
