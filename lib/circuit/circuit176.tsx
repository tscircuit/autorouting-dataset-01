/** Randomly generated circuit 176. */
export default () => (
  <board width="48.00mm" height="27.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={10.0}
      pcbY={-9.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N14",
        pin1: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={1.0}
      pcbY={7.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0805"
      pcbX={-21.0}
      pcbY={1.5}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={1.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-5.0}
      pcbY={8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={12.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N6",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-4"
      footprint="0603"
      pcbX={-5.0}
      pcbY={-3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={13.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-21.0}
      pcbY={5.5}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={0.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-21.0}
      pcbY={8.5}
      pcbRotation={15.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N11",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-13.0}
      pcbY={9.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N19",
        pin1: "net.N19",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-8.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N11",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={-14.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N12",
      }}
    />
    <diode
      name="diode-6"
      footprint="sod123"
      pcbX={-2.0}
      pcbY={-1.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N15",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={17.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N7",
        pin3: "net.N9",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={15.0}
      pcbY={5.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin8: "net.N5",
        pin7: "net.N6",
        pin5: "net.N6",
        pin1: "net.N10",
        pin6: "net.N10",
        pin4: "net.N13",
        pin2: "net.N16",
        pin3: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-19.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin4: "net.N2",
        pin3: "net.N3",
        pin5: "net.N5",
        pin6: "net.N7",
        pin1: "net.N9",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={1.0}
      pcbY={3.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin3: "net.N5",
        pin2: "net.N14",
        pin4: "net.N18",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={21.0}
      pcbY={-10.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N8",
        pin4: "net.N9",
        pin3: "net.N13",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
