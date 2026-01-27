/** Randomly generated circuit 259. */
export default () => (
  <board width="30.00mm" height="54.00mm">
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader6"
      pcbX={-4.5}
      pcbY={-9.0}
      connections={{
        pin5: "net.N4",
        pin3: "net.N10",
        pin2: "net.N11",
        pin6: "net.N15",
        pin1: "net.N16",
        pin4: "net.N17",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-4.5}
      pcbY={4.5}
      connections={{
        pin8: "net.N7",
        pin3: "net.N8",
        pin7: "net.N12",
        pin2: "net.N12",
        pin5: "net.N13",
        pin6: "net.N14",
        pin4: "net.N16",
        pin1: "net.N16",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={3.0}
      pcbY={5.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N7",
      }}
    />
    <pinheader
      name="pinhead-2"
      footprint="pinheader4"
      pcbX={-6.0}
      pcbY={15.0}
      connections={{
        pin3: "net.N6",
        pin4: "net.N8",
        pin2: "net.N12",
        pin1: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-6.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N10",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="SOD-323"
      pcbX={10.5}
      pcbY={-10.5}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={6.0}
      pcbY={-3.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={6.0}
      pcbY={12.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-2.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-10.5}
      pcbY={-18.0}
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={10.5}
      pcbY={4.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-1.5}
      pcbY={-18.0}
      connections={{
        pin1: "net.N13",
        pin2: "net.N17",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={7.5}
      pcbY={-18.0}
      connections={{
        pin3: "net.N2",
        pin1: "net.N14",
        pin2: "net.N15",
      }}
      type="npn"
    />
    <diode
      name="diode-4"
      footprint="SOD-123"
      pcbX={7.5}
      pcbY={19.5}
      connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinheader2"
      pcbX={-9.0}
      pcbY={22.0}
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={1.5}
      pcbY={-3.0}
      connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinheader2"
      pcbX={-9.5}
      pcbY={10.0}
      connections={{
        pin1: "net.N7",
        pin2: "net.N11",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-6"
      footprint="0805"
      pcbX={-1.0}
      pcbY={21.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-11.0}
      pcbY={-23.0}
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
  </board>
)
