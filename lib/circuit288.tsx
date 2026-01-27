/** Randomly generated circuit 288. */
export default () => (
  <board width="80.00mm" height="32.00mm">
    <capacitor name="capacitor-1" footprint="0603" pcbX={-11.65} pcbY={-8.74} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0402" pcbX={-37.36} pcbY={2.41} connections={{
        pin2: "net.N3",
        pin1: "net.N4",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={30.41} pcbY={-2.71} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={-17.82} pcbY={2.52} connections={{
        pin2: "net.N4",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-4" footprint="0402" pcbX={-1.11} pcbY={1.49} connections={{
        pin2: "net.N1",
        pin1: "net.N1",
      }} capacitance="0.1uF" />
    <resistor name="resistor-2" footprint="0603" pcbX={-21.12} pcbY={-7.01} connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0402" pcbX={11.60} pcbY={-4.62} connections={{
        pin2: "net.N3",
        pin1: "net.N6",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={25.74} pcbY={-9.25} connections={{
        pin3: "net.N1",
        pin1: "net.N5",
        pin2: "net.N6",
      }} type="npn" />
  </board>
)
