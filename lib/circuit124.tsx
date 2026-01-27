/** Randomly generated circuit 124. */
export default () => (
  <board width="100.00mm" height="20.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-19.76} pcbY={-3.27} connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }} />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={10.62} pcbY={5.27} connections={{
        pin2: "net.N4",
        pin1: "net.N6",
        pin3: "net.N14",
      }} type="npn" />
    <chip name="chip-1" footprint="pinrow6" pcbX={39.86} pcbY={-7.32} connections={{
        pin1: "net.N1",
        pin5: "net.N3",
        pin3: "net.N3",
        pin2: "net.N4",
        pin6: "net.N5",
        pin4: "net.N15",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-34.42} pcbY={-8.66} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <diode name="diode-2" footprint="SOD-123" pcbX={44.89} pcbY={9.28} connections={{
        pin1: "net.N2",
        pin2: "net.N17",
      }} />
    <chip name="chip-2" footprint="dip8" pcbX={25.35} pcbY={0.49} connections={{
        pin8: "net.N1",
        pin5: "net.N1",
        pin3: "net.N2",
        pin4: "net.N3",
        pin2: "net.N9",
        pin7: "net.N15",
        pin1: "net.N16",
        pin6: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic8" pcbX={-8.78} pcbY={-7.74} connections={{
        pin1: "net.N2",
        pin6: "net.N10",
        pin2: "net.N12",
        pin8: "net.N13",
        pin4: "net.N13",
        pin5: "net.N14",
        pin7: "net.N15",
        pin3: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-3" footprint="SOD-123" pcbX={13.95} pcbY={-4.14} connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }} />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-47.15} pcbY={-0.05} connections={{
        pin3: "net.N8",
        pin1: "net.N9",
        pin2: "net.N11",
      }} type="npn" />
    <chip name="chip-4" footprint="soic16" pcbX={-1.07} pcbY={5.12} connections={{
        pin13: "net.N1",
        pin11: "net.N5",
        pin4: "net.N5",
        pin14: "net.N6",
        pin16: "net.N6",
        pin6: "net.N7",
        pin9: "net.N8",
        pin15: "net.N8",
        pin2: "net.N8",
        pin5: "net.N10",
        pin12: "net.N11",
        pin1: "net.N12",
        pin7: "net.N15",
        pin8: "net.N16",
        pin10: "net.N17",
        pin3: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
