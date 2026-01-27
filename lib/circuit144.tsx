/** Randomly generated circuit 144. */
export default () => (
  <board width="16.00mm" height="26.00mm">
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="SOD-323"
      pcbX={-3.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={0.0}
      pcbY={6.0}
      connections={{
        pin5: "net.N1",
        pin3: "net.N4",
        pin6: "net.N4",
        pin1: "net.N5",
        pin2: "net.N5",
        pin4: "net.N5",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={0.5}
      pcbY={-3.5}
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-3.5}
      pcbY={-7.0}
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
        pin3: "net.N4",
      }}
      type="npn"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-0.5}
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      resistance="1k"
    />
  </board>
)
