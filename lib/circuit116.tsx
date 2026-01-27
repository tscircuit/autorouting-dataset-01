/** Randomly generated circuit 116. */
export default () => (
  <board width="16.00mm" height="16.00mm">
    <pinheader
      name="pinhead-1"
      footprint="pinheader2"
      pcbX={0.0}
      pcbY={0.0}
      connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-4.0}
      pcbY={-4.0}
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      capacitance="0.1uF"
    />
  </board>
)
