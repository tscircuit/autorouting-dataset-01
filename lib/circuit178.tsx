/** Randomly generated circuit 178. */
export default () => (
  <board width="19.00mm" height="19.00mm">
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-5.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="pinrow6"
      pcbX={-1.5}
      pcbY={4.0}
      connections={{
        pin1: "net.N2",
        pin4: "net.N2",
        pin2: "net.N3",
        pin3: "net.N3",
        pin5: "net.N3",
        pin6: "net.N4",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-1.0}
      pcbY={-3.0}
      connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-5"
      footprint="0402"
      pcbX={5.0}
      pcbY={-5.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
      }}
      capacitance="0.1uF"
    />
  </board>
)
