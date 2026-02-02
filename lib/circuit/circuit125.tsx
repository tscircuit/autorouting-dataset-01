/** Randomly generated circuit 125. */
export default () => (
  <board width="40.00mm" height="23.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={10.0}
      pcbY={4.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={-5.0}
      pcbY={5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-7.0}
      pcbY={-2.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={8.0}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={15.0}
      pcbY={-8.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={1.0}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N8",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={7.0}
      pcbY={2.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N10",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod323"
      pcbX={-12.0}
      pcbY={3.5}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
    />
    <diode
      name="diode-4"
      footprint="sod323"
      pcbX={-17.0}
      pcbY={-7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N17",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={13.0}
      pcbY={-0.5}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N8",
        pin3: "net.N10",
        pin1: "net.N13",
      }}
      type="mosfet"
    />
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={7.0}
      pcbY={7.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N1",
        pin10: "net.N2",
        pin16: "net.N2",
        pin13: "net.N3",
        pin6: "net.N4",
        pin2: "net.N5",
        pin1: "net.N6",
        pin8: "net.N6",
        pin15: "net.N9",
        pin12: "net.N9",
        pin5: "net.N11",
        pin11: "net.N11",
        pin3: "net.N11",
        pin7: "net.N14",
        pin9: "net.N16",
        pin14: "net.N17",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-7.0}
      pcbY={1.5}
      pcbRotation={45.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin4: "net.N7",
        pin2: "net.N8",
        pin1: "net.N13",
        pin6: "net.N16",
        pin5: "net.N16",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={17.0}
      pcbY={-4.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N12",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-9.0}
      pcbY={-6.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N15",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={-17.0}
      pcbY={-6.5}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin6: "net.N2",
        pin2: "net.N4",
        pin5: "net.N7",
        pin4: "net.N12",
        pin3: "net.N15",
        pin1: "net.N17",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
  </board>
)
