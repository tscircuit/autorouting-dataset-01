/** Randomly generated circuit 116. */
export default () => (
  <board width="80.00mm" height="48.00mm">
    <chip name="chip-1" footprint="pinrow6" pcbX={-27.98} pcbY={-21.28} connections={{
        pin6: "net.N2",
        pin5: "net.N6",
        pin1: "net.N7",
        pin4: "net.N9",
        pin2: "net.N9",
        pin3: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={24.59} pcbY={22.72} connections={{
        pin1: "net.N4",
        pin2: "net.N6",
        pin3: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={9.82} pcbY={-14.94} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={33.63} pcbY={-8.42} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
        pin3: "net.N8",
      }} type="npn" />
    <chip name="chip-2" footprint="dip8" pcbX={34.36} pcbY={14.65} connections={{
        pin4: "net.N1",
        pin8: "net.N2",
        pin6: "net.N4",
        pin7: "net.N5",
        pin3: "net.N5",
        pin1: "net.N10",
        pin2: "net.N11",
        pin5: "net.N11",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-3" footprint="soic16" pcbX={-11.23} pcbY={8.41} connections={{
        pin5: "net.N1",
        pin4: "net.N3",
        pin6: "net.N3",
        pin2: "net.N3",
        pin16: "net.N4",
        pin8: "net.N5",
        pin1: "net.N6",
        pin13: "net.N6",
        pin14: "net.N7",
        pin9: "net.N7",
        pin11: "net.N8",
        pin7: "net.N9",
        pin12: "net.N10",
        pin15: "net.N11",
        pin3: "net.N12",
        pin10: "net.N12",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-1" footprint="SOD-123" pcbX={-5.35} pcbY={-3.24} connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={15.79} pcbY={-17.29} connections={{
        pin1: "net.N2",
        pin2: "net.N5",
      }} />
  </board>
)
