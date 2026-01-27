/** Randomly generated circuit 225. */
export default () => (
  <board width="52.00mm" height="29.00mm">
    <pinheader name="pinhead-1" footprint="pinheader6" pcbX={0.00} pcbY={0.00} connections={{
        pin5: "net.N8",
        pin1: "net.N10",
        pin6: "net.N11",
        pin2: "net.N14",
        pin3: "net.N18",
        pin4: "net.N18",
      }} pinCount={6} pitch="2.54mm" />
    <chip name="chip-1" footprint="pinrow8" pcbX={-7.00} pcbY={-7.00} connections={{
        pin3: "net.N3",
        pin8: "net.N3",
        pin4: "net.N5",
        pin5: "net.N7",
        pin1: "net.N13",
        pin6: "net.N15",
        pin2: "net.N17",
        pin7: "net.N22",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic16" pcbX={-8.00} pcbY={8.00} connections={{
        pin3: "net.N2",
        pin2: "net.N3",
        pin1: "net.N6",
        pin5: "net.N9",
        pin7: "net.N9",
        pin6: "net.N9",
        pin9: "net.N10",
        pin11: "net.N10",
        pin8: "net.N11",
        pin12: "net.N12",
        pin15: "net.N12",
        pin10: "net.N14",
        pin4: "net.N19",
        pin16: "net.N19",
        pin13: "net.N20",
        pin14: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <capacitor name="capacitor-1" footprint="0402" pcbX={4.50} pcbY={9.00} connections={{
        pin1: "net.N8",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <pinheader name="pinhead-2" footprint="pinheader2" pcbX={9.00} pcbY={-9.00} connections={{
        pin1: "net.N9",
        pin2: "net.N16",
      }} pinCount={2} pitch="2.54mm" />
    <diode name="diode-1" footprint="SOD-123" pcbX={0.50} pcbY={4.00} connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }} />
    <pinheader name="pinhead-3" footprint="pinheader2" pcbX={6.50} pcbY={5.00} connections={{
        pin1: "net.N14",
        pin2: "net.N16",
      }} pinCount={2} pitch="2.54mm" />
    <chip name="chip-3" footprint="dip8" pcbX={15.00} pcbY={-1.50} connections={{
        pin2: "net.N5",
        pin7: "net.N10",
        pin3: "net.N11",
        pin4: "net.N13",
        pin1: "net.N13",
        pin8: "net.N20",
        pin6: "net.N21",
        pin5: "net.N21",
      }} manufacturerPartNumber="GENERIC" />
    <diode name="diode-2" footprint="SOD-123" pcbX={3.00} pcbY={-4.00} connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }} />
    <diode name="diode-3" footprint="SOD-323" pcbX={10.00} pcbY={11.00} connections={{
        pin2: "net.N2",
        pin1: "net.N17",
      }} />
    <resistor name="resistor-1" footprint="0603" pcbX={18.00} pcbY={9.00} connections={{
        pin1: "net.N4",
        pin2: "net.N4",
      }} resistance="1k" />
    <diode name="diode-4" footprint="SOD-123" pcbX={-21.00} pcbY={-10.50} connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }} />
    <resistor name="resistor-2" footprint="0805" pcbX={-21.00} pcbY={-3.00} connections={{
        pin2: "net.N3",
        pin1: "net.N18",
      }} resistance="1k" />
    <resistor name="resistor-3" footprint="0805" pcbX={-13.00} pcbY={-1.00} connections={{
        pin2: "net.N15",
        pin1: "net.N20",
      }} resistance="1k" />
    <diode name="diode-5" footprint="SOD-323" pcbX={-21.00} pcbY={4.50} connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }} />
    <diode name="diode-6" footprint="SOD-323" pcbX={0.00} pcbY={7.50} connections={{
        pin2: "net.N16",
        pin1: "net.N19",
      }} />
    <resistor name="resistor-4" footprint="0603" pcbX={17.00} pcbY={-11.00} connections={{
        pin2: "net.N22",
        pin1: "net.N22",
      }} resistance="1k" />
  </board>
)
