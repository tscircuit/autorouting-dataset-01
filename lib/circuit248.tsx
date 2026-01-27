/** Randomly generated circuit 248. */
export default () => (
  <board width="42.00mm" height="42.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-6.0}
      pcbY={-6.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N12",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={-4.0}
      pcbY={4.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={3.0}
      pcbY={-9.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={4.5}
      pcbY={9.0}
      connections={{
        pin1: "net.N4",
        pin2: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={8.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N6",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-12.0}
      pcbY={12.0}
      connections={{
        pin3: "net.N3",
        pin1: "net.N8",
        pin2: "net.N8",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={8.0}
      pcbY={3.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-8.0}
      pcbY={8.0}
      connections={{
        pin2: "net.N11",
        pin1: "net.N11",
        pin4: "net.N12",
        pin3: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader4"
      pcbX={-12.0}
      pcbY={-12.0}
      connections={{
        pin2: "net.N2",
        pin3: "net.N5",
        pin4: "net.N13",
        pin1: "net.N14",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={13.0}
      pcbY={-13.0}
      connections={{
        pin2: "net.N7",
        pin5: "net.N8",
        pin1: "net.N9",
        pin6: "net.N11",
        pin4: "net.N13",
        pin3: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="pinrow6"
      pcbX={-10.0}
      pcbY={-2.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N6",
        pin3: "net.N6",
        pin4: "net.N9",
        pin6: "net.N9",
        pin5: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={13.5}
      pcbY={10.5}
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-2.0}
      pcbY={-4.0}
      connections={{
        pin1: "net.N2",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={-0.5}
      pcbY={4.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={9.5}
      pcbY={-7.5}
      connections={{
        pin1: "net.N6",
        pin3: "net.N7",
        pin2: "net.N14",
      }}
      type="npn"
    />
    <capacitor
      name="capacitor-6"
      footprint="0805"
      pcbX={2.0}
      pcbY={-4.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-7"
      footprint="0805"
      pcbX={3.5}
      pcbY={4.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
  </board>
)
