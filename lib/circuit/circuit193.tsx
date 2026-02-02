/** Randomly generated circuit 193. */
export default () => (
  <board width="28.00mm" height="28.00mm">
    <resistor
      name="resistor-1"
      footprint="0603"
      pcbX={10.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="0603"
      pcbX={7.0}
      pcbY={-4.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N1",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-3.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-10.0}
      pcbY={6.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={3.0}
      pcbY={4.0}
      pcbRotation={15.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N8",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-1.0}
      pcbY={-1.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N5",
        pin3: "net.N6",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={5.0}
      pcbY={11.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N9",
        pin1: "net.N10",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={11.0}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N5",
        pin3: "net.N6",
      }}
      type="mosfet"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={7.0}
      pcbY={-7.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
        pin6: "net.N2",
        pin5: "net.N3",
        pin3: "net.N3",
        pin4: "net.N4",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-5.0}
      pcbY={1.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N3",
        pin3: "net.N7",
        pin4: "net.N8",
        pin2: "net.N10",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
