/** Randomly generated circuit 169. */
export default () => (
  <board width="66.00mm" height="66.00mm">
    <diode name="diode-1" footprint="SOD-123" pcbX={-13.88} pcbY={11.22} connections={{
        pin2: "net.N6",
        pin1: "net.N13",
      }} />
    <diode name="diode-2" footprint="SOD-123" pcbX={-10.84} pcbY={0.89} connections={{
        pin1: "net.N7",
        pin2: "net.N8",
      }} />
    <capacitor name="capacitor-1" footprint="0402" pcbX={-31.28} pcbY={12.48} connections={{
        pin1: "net.N5",
        pin2: "net.N13",
      }} capacitance="0.1uF" />
    <transistor name="transistor-1" footprint="SOT-23" pcbX={2.71} pcbY={24.42} connections={{
        pin1: "net.N1",
        pin2: "net.N11",
        pin3: "net.N12",
      }} type="npn" />
    <chip name="chip-1" footprint="soic16" pcbX={18.73} pcbY={-11.52} connections={{
        pin3: "net.N1",
        pin5: "net.N1",
        pin12: "net.N1",
        pin4: "net.N2",
        pin7: "net.N3",
        pin2: "net.N4",
        pin13: "net.N5",
        pin6: "net.N6",
        pin11: "net.N7",
        pin1: "net.N7",
        pin15: "net.N7",
        pin10: "net.N8",
        pin9: "net.N9",
        pin16: "net.N10",
        pin14: "net.N12",
        pin8: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <transistor name="transistor-2" footprint="SOT-23" pcbX={1.03} pcbY={4.49} connections={{
        pin2: "net.N3",
        pin3: "net.N9",
        pin1: "net.N9",
      }} type="npn" />
    <capacitor name="capacitor-2" footprint="0603" pcbX={-26.96} pcbY={-3.50} connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }} capacitance="0.1uF" />
    <capacitor name="capacitor-3" footprint="0603" pcbX={-30.94} pcbY={-27.53} connections={{
        pin1: "net.N10",
        pin2: "net.N11",
      }} capacitance="0.1uF" />
    <resistor name="resistor-1" footprint="0603" pcbX={-10.76} pcbY={-11.38} connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }} resistance="1k" />
    <chip name="chip-2" footprint="dip8" pcbX={17.90} pcbY={21.80} connections={{
        pin7: "net.N2",
        pin5: "net.N2",
        pin3: "net.N3",
        pin8: "net.N4",
        pin2: "net.N4",
        pin4: "net.N6",
        pin6: "net.N11",
        pin1: "net.N13",
      }} manufacturerPartNumber="GENERIC" />
    <inductor name="inductor-1" footprint="0402" pcbX={-25.34} pcbY={9.28} connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }} inductance="10uH" />
  </board>
)
