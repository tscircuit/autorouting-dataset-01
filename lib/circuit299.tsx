/** Randomly generated circuit 299. */
export default () => (
  <board width="14.00mm" height="70.00mm">
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.64} pcbY={-23.05} connections={{
        pin3: "net.N5",
        pin1: "net.N8",
        pin2: "net.N9",
      }} type="npn" />
    <resistor name="resistor-1" footprint="0402" pcbX={0.10} pcbY={1.87} connections={{
        pin1: "net.N2",
        pin2: "net.N4",
      }} resistance="1k" />
    <chip name="chip-1" footprint="pinrow6" pcbX={0.59} pcbY={-9.11} connections={{
        pin4: "net.N1",
        pin2: "net.N1",
        pin1: "net.N1",
        pin5: "net.N3",
        pin6: "net.N6",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-5.76} pcbY={18.19} connections={{
        pin1: "net.N3",
        pin2: "net.N8",
      }} capacitance="0.1uF" />
    <chip name="chip-2" footprint="pinrow6" pcbX={0.03} pcbY={27.25} connections={{
        pin1: "net.N1",
        pin4: "net.N2",
        pin5: "net.N3",
        pin6: "net.N6",
        pin2: "net.N7",
        pin3: "net.N8",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="pinrow6" pcbX={1.62} pcbY={-15.61} connections={{
        pin4: "net.N3",
        pin5: "net.N4",
        pin1: "net.N4",
        pin2: "net.N5",
        pin6: "net.N7",
        pin3: "net.N9",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-4.00} pcbY={-33.46} connections={{
        pin2: "net.N4",
        pin1: "net.N9",
      }} capacitance="0.1uF" />
  </board>
)
