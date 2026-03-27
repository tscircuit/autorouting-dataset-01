/** Randomly generated circuit 268. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.96mm"
    height="39.57mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={3.14}
      pcbY={2.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin3: "net.N5",
        pin2: "net.N6",
        pin4: "net.N8",
        pin5: "net.N9",
        pin6: "net.N10",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={-15.65}
      pcbY={-15.91}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="1206"
      pcbX={-5.09}
      pcbY={9.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N1",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={16.46}
      pcbY={-3.86}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={15.73}
      pcbY={11.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-1"
      footprint="ssop16"
      pcbX={7.17}
      pcbY={-12.09}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin9: "net.N4",
        pin13: "net.N5",
        pin8: "net.N6",
        pin3: "net.N7",
        pin6: "net.N7",
        pin4: "net.N10",
        pin12: "net.N11",
        pin10: "net.N11",
        pin7: "net.N12",
        pin14: "net.N12",
        pin15: "net.N13",
        pin5: "net.N14",
        pin2: "net.N14",
        pin16: "net.N15",
        pin11: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={16.02}
      pcbY={-11.63}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="0402"
      pcbX={-3.79}
      pcbY={15.65}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N14",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={15.48}
      pcbY={3.41}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N4",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="1210"
      pcbX={-15.78}
      pcbY={5.96}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N14",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={-5.91}
      pcbY={-6.12}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={4.26}
      pcbY={12.16}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin3: "net.N5",
        pin2: "net.N9",
        pin1: "net.N13",
      }}
      type="jfet"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={-5.46}
      pcbY={-11.9}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N4",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-5"
      footprint="0603"
      pcbX={-13.92}
      pcbY={14.21}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={-15.09}
      pcbY={-5.65}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin3: "net.N4",
        pin1: "net.N7",
        pin4: "net.N10",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
