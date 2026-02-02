/** Randomly generated circuit 102. */
export default () => (
  <board width="50.00mm" height="50.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={13.0}
      pcbY={22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={11.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N20",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-13.0}
      pcbY={10.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N15",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-17.0}
      pcbY={0.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={10.0}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-21.0}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={-6.0}
      pcbY={-12.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={-20.0}
      pcbY={12.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={4.0}
      pcbY={-14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={20.0}
      pcbY={14.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N16",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={2.0}
      pcbY={-14.0}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N18",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-6"
      footprint="0402"
      pcbX={10.0}
      pcbY={10.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-11.0}
      pcbY={3.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N19",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-14.0}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N20",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={17.0}
      pcbY={-5.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={14.0}
      pcbY={-14.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N14",
        pin2: "net.N14",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-20.0}
      pcbY={-10.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin3: "net.N10",
        pin2: "net.N11",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={2.0}
      pcbY={-22.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin3: "net.N16",
        pin2: "net.N19",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-14.0}
      pcbY={-12.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N13",
        pin3: "net.N14",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={8.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin6: "net.N6",
        pin5: "net.N7",
        pin4: "net.N8",
        pin2: "net.N16",
        pin3: "net.N17",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={8.0}
      pcbY={-6.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N20",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={2.0}
      pcbY={18.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin3: "net.N3",
        pin5: "net.N4",
        pin1: "net.N12",
        pin4: "net.N14",
        pin2: "net.N15",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
