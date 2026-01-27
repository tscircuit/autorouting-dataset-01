/** Randomly generated circuit 191. */
export default () => (
  <board width="24.00mm" height="24.00mm">
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={0.00} pcbY={0.00} connections={{
        pin6: "net.N1",
        pin5: "net.N3",
        pin1: "net.N4",
        pin4: "net.N4",
        pin3: "net.N5",
        pin2: "net.N5",
      }} pinCount={6} pitch="2.54mm" />
    <resistor name="resistor-1" footprint="0402" pcbX={-6.00} pcbY={-6.00} connections={{
        pin1: "net.N1",
        pin2: "net.N4",
      }} resistance="1k" />
    <pinheader name="pinhead-2" footprint="pinheader2" pcbX={-6.00} pcbY={7.00} connections={{
        pin2: "net.N1",
        pin1: "net.N3",
      }} pinCount={2} pitch="2.54mm" />
    <pinheader name="pinhead-3" footprint="pinheader4" pcbX={4.00} pcbY={-7.00} connections={{
        pin4: "net.N1",
        pin3: "net.N2",
        pin2: "net.N2",
        pin1: "net.N2",
      }} pinCount={4} pitch="2.54mm" />
    <transistor name="transistor-1" footprint="SOT-223" pcbX={2.00} pcbY={5.50} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
        pin3: "net.N5",
      }} type="npn" />
  </board>
)
