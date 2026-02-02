/** Randomly generated circuit 188. */
export default () => (
  <board width="29.00mm" height="52.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={7.5}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={9.5}
      pcbY={13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={-6.5}
      pcbY={21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N22",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-4"
      footprint="0805"
      pcbX={0.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N25",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0402"
      pcbX={7.5}
      pcbY={-2.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N24",
        pin2: "net.N25",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={-7.5}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N23",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-3.5}
      pcbY={-9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="0805"
      pcbX={-3.5}
      pcbY={-5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-7.5}
      pcbY={-22.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
    />
    <diode
      name="diode-2"
      footprint="SOD-123"
      pcbX={3.5}
      pcbY={15.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N9",
      }}
    />
    <diode
      name="diode-3"
      footprint="SOD-323"
      pcbX={-8.5}
      pcbY={2.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }}
    />
    <diode
      name="diode-4"
      footprint="SOD-323"
      pcbX={-11.5}
      pcbY={16.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N18",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={0.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin3: "net.N11",
        pin1: "net.N21",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-7.5}
      pcbY={9.0}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N8",
      }}
      type="npn"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={8.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N17",
        pin3: "net.N20",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={-11.5}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N3",
        pin1: "net.N16",
        pin2: "net.N17",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={-9.5}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N8",
        pin1: "net.N14",
        pin2: "net.N19",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-6"
      footprint="SOT-23"
      pcbX={10.5}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin3: "net.N4",
        pin2: "net.N7",
        pin1: "net.N13",
      }}
      type="jfet"
    />
    <chip
      name="chip-1"
      footprint="soic8"
      pcbX={-3.5}
      pcbY={-23.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin5: "net.N6",
        pin8: "net.N7",
        pin2: "net.N13",
        pin6: "net.N15",
        pin3: "net.N18",
        pin7: "net.N22",
        pin4: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-2"
      footprint="soic8"
      pcbX={-3.5}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin7: "net.N6",
        pin6: "net.N10",
        pin1: "net.N10",
        pin4: "net.N16",
        pin8: "net.N16",
        pin3: "net.N23",
        pin5: "net.N25",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-3"
      footprint="pinrow8"
      pcbX={4.5}
      pcbY={-19.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin4: "net.N6",
        pin3: "net.N7",
        pin6: "net.N9",
        pin7: "net.N16",
        pin2: "net.N20",
        pin8: "net.N21",
        pin1: "net.N24",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <chip
      name="chip-4"
      footprint="pinrow6"
      pcbX={5.5}
      pcbY={21.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin3: "net.N4",
        pin5: "net.N6",
        pin6: "net.N8",
        pin2: "net.N17",
        pin4: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinheader4"
      pcbX={4.5}
      pcbY={-11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N10",
        pin4: "net.N12",
        pin2: "net.N19",
        pin1: "net.N22",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
