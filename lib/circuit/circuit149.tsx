/** Randomly generated circuit 149. */
export default () => (
  <board width="27.00mm" height="27.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={0.5}
      pcbY={8.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-5.5}
      pcbY={5.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N16",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={5.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-10.5}
      pcbY={1.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={5.5}
      pcbY={-8.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0603"
      pcbX={-10.5}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={5.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={-0.5}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0603"
      pcbX={9.5}
      pcbY={3.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N16",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-123"
      pcbX={0.5}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={4.5}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={9.5}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={-0.5}
      pcbY={1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-4.5}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin2: "net.N13",
        pin1: "net.N16",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={9.5}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin3: "net.N10",
        pin1: "net.N10",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-10.5}
      pcbY={7.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N7",
        pin1: "net.N9",
        pin2: "net.N11",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-5.5}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N3",
        pin6: "net.N7",
        pin1: "net.N8",
        pin2: "net.N9",
        pin4: "net.N12",
        pin3: "net.N12",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={7.5}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader6"
      pcbX={-10.5}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N5",
        pin4: "net.N6",
        pin2: "net.N7",
        pin3: "net.N8",
        pin1: "net.N11",
        pin5: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
