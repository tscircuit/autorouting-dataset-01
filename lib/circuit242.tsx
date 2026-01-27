/** Randomly generated circuit 242. */
export default () => (
  <board width="90.00mm" height="90.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-9.72} pcbY={40.14} connections={{
        pin2: "net.N14",
        pin1: "net.N16",
      }} />
    <resistor name="resistor-1" footprint="0402" pcbX={24.95} pcbY={-14.49} connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }} resistance="1k" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={-28.61} pcbY={-11.23} connections={{
        pin1: "net.N1",
        pin2: "net.N1",
        pin3: "net.N11",
      }} type="npn" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={3.32} pcbY={-15.50} connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }} capacitance="0.1uF" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-1.38} pcbY={-30.08} connections={{
        pin1: "net.N7",
        pin3: "net.N9",
        pin2: "net.N12",
      }} type="npn" />
    <chip name="chip-1" footprint="dip8" pcbX={13.44} pcbY={10.80} connections={{
        pin7: "net.N1",
        pin6: "net.N2",
        pin1: "net.N5",
        pin4: "net.N5",
        pin5: "net.N6",
        pin3: "net.N8",
        pin2: "net.N9",
        pin8: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-3" footprint="SOT-23" pcbX={35.51} pcbY={-27.30} connections={{
        pin3: "net.N12",
        pin1: "net.N14",
        pin2: "net.N15",
      }} type="npn" />
    <chip name="chip-2" footprint="pinrow6" pcbX={26.34} pcbY={-22.08} connections={{
        pin6: "net.N3",
        pin2: "net.N6",
        pin3: "net.N7",
        pin1: "net.N10",
        pin5: "net.N12",
        pin4: "net.N16",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0603" pcbX={36.39} pcbY={-0.94} connections={{
        pin1: "net.N7",
        pin2: "net.N9",
      }} resistance="1k" />
    <capacitor name="capacitor-2" footprint="0402" pcbX={-30.60} pcbY={30.66} connections={{
        pin1: "net.N2",
        pin2: "net.N3",
      }} capacitance="0.1uF" />
    <inductor name="inductor-1" footprint="0402" pcbX={-31.31} pcbY={42.80} connections={{
        pin1: "net.N6",
        pin2: "net.N15",
      }} inductance="10uH" />
    <transistor name="transistor-4" footprint="SOT-23" pcbX={-36.56} pcbY={10.58} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
        pin3: "net.N15",
      }} type="npn" />
    <transistor name="transistor-5" footprint="SOT-23" pcbX={-17.08} pcbY={-2.41} connections={{
        pin1: "net.N7",
        pin3: "net.N8",
        pin2: "net.N15",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0402" pcbX={11.30} pcbY={29.06} connections={{
        pin1: "net.N4",
        pin2: "net.N17",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="dip8" pcbX={40.22} pcbY={20.40} connections={{
        pin7: "net.N5",
        pin1: "net.N6",
        pin6: "net.N11",
        pin2: "net.N13",
        pin5: "net.N17",
        pin3: "net.N17",
        pin8: "net.N17",
        pin4: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
  </board>
)
