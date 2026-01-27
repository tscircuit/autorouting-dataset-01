/** Randomly generated circuit 123. */
export default () => (
  <board width="60.00mm" height="150.00mm">
    <resistor name="resistor-1" footprint="0603" pcbX={-7.39} pcbY={-50.69} connections={{
        pin2: "net.N15",
        pin1: "net.N19",
      }} resistance="1k" />
    <inductor name="inductor-1" footprint="0402" pcbX={-12.32} pcbY={18.76} connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} inductance="10uH" />
    <capacitor name="capacitor-1" footprint="0603" pcbX={-12.75} pcbY={-4.49} connections={{
        pin1: "net.N18",
        pin2: "net.N19",
      }} capacitance="0.1uF" />
    <chip name="chip-1" footprint="pinrow6" pcbX={12.27} pcbY={-39.47} connections={{
        pin3: "net.N1",
        pin1: "net.N1",
        pin2: "net.N11",
        pin6: "net.N16",
        pin4: "net.N22",
        pin5: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-2" footprint="soic8" pcbX={-18.98} pcbY={-34.00} connections={{
        pin1: "net.N1",
        pin3: "net.N3",
        pin6: "net.N7",
        pin2: "net.N9",
        pin4: "net.N11",
        pin7: "net.N15",
        pin5: "net.N16",
        pin8: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <resistor name="resistor-2" footprint="0402" pcbX={21.90} pcbY={57.64} connections={{
        pin2: "net.N6",
        pin1: "net.N8",
      }} resistance="1k" />
    <diode name="diode-1" footprint="SOD-123" pcbX={15.69} pcbY={-2.77} connections={{
        pin2: "net.N6",
        pin1: "net.N9",
      }} />
    <capacitor name="capacitor-2" footprint="0603" pcbX={26.35} pcbY={-14.74} connections={{
        pin2: "net.N7",
        pin1: "net.N10",
      }} capacitance="0.1uF" />
    <chip name="chip-3" footprint="pinrow6" pcbX={19.90} pcbY={-51.60} connections={{
        pin2: "net.N2",
        pin6: "net.N2",
        pin5: "net.N9",
        pin3: "net.N11",
        pin4: "net.N14",
        pin1: "net.N17",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={11.45} pcbY={31.16} connections={{
        pin2: "net.N18",
        pin3: "net.N23",
        pin1: "net.N25",
      }} type="npn" />
    <chip name="chip-4" footprint="soic16" pcbX={-11.07} pcbY={-43.79} connections={{
        pin6: "net.N3",
        pin10: "net.N4",
        pin7: "net.N5",
        pin13: "net.N8",
        pin15: "net.N9",
        pin12: "net.N10",
        pin2: "net.N10",
        pin4: "net.N12",
        pin5: "net.N13",
        pin8: "net.N18",
        pin1: "net.N20",
        pin9: "net.N21",
        pin16: "net.N22",
        pin11: "net.N22",
        pin14: "net.N23",
        pin3: "net.N24",
      }} manufacturerPartNumber="GENERIC" />
    <chip name="chip-5" footprint="soic16" pcbX={-21.65} pcbY={53.93} connections={{
        pin8: "net.N3",
        pin9: "net.N3",
        pin14: "net.N4",
        pin5: "net.N5",
        pin15: "net.N6",
        pin3: "net.N11",
        pin4: "net.N12",
        pin13: "net.N13",
        pin16: "net.N13",
        pin12: "net.N15",
        pin7: "net.N17",
        pin1: "net.N20",
        pin10: "net.N22",
        pin6: "net.N23",
        pin11: "net.N25",
        pin2: "net.N25",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={-13.65} pcbY={-59.86} connections={{
        pin1: "net.N14",
        pin2: "net.N18",
        pin3: "net.N20",
      }} type="npn" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-22.83} pcbY={-22.87} connections={{
        pin2: "net.N10",
        pin1: "net.N24",
      }} capacitance="0.1uF" />
    <resistor name="resistor-3" footprint="0402" pcbX={29.10} pcbY={-37.95} connections={{
        pin2: "net.N5",
        pin1: "net.N21",
      }} resistance="1k" />
  </board>
)
