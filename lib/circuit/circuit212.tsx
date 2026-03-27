/** Randomly generated circuit 212. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="51.80mm"
    height="42.34mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={18.27}
      pcbY={-15.39}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N20",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-21.22}
      pcbY={-8.84}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N18",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-18.7}
      pcbY={17.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N17",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={-20.88}
      pcbY={-17.3}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-1"
      footprint="qfn24_w6_h6_p0.8mm_thermalpad_startingpin(topside,rightpin)_ccw"
      pcbX={-7.95}
      pcbY={-15.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin17: "net.N1",
        pin11: "net.N1",
        pin2: "net.N4",
        pin5: "net.N4",
        pin8: "net.N5",
        pin18: "net.N6",
        pin15: "net.N6",
        pin22: "net.N6",
        pin23: "net.N7",
        pin13: "net.N8",
        pin16: "net.N9",
        pin10: "net.N9",
        pin14: "net.N11",
        pin24: "net.N12",
        pin4: "net.N12",
        pin19: "net.N13",
        pin6: "net.N13",
        pin21: "net.N15",
        pin9: "net.N16",
        pin12: "net.N17",
        pin3: "net.N17",
        pin7: "net.N19",
        pin20: "net.N19",
        pin1: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={-19.13}
      pcbY={13.28}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-2.92}
      pcbY={15.23}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N10",
        pin1: "net.N13",
        pin2: "net.N18",
      }}
      type="bjt"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={9.54}
      pcbY={7.2}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N2",
        pin1: "net.N16",
        pin4: "net.N19",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={-5.07}
      pcbY={0.45}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N21",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="axial_p0.2in"
      pcbX={20.78}
      pcbY={14.93}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin2: "net.N18",
      }}
    />
    <inductor
      name="inductor-3"
      footprint="axial_p0.2in"
      pcbX={10.06}
      pcbY={-10.31}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N15",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-11.17}
      pcbY={14.2}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-4"
      footprint="1210"
      pcbX={-9.87}
      pcbY={-2.04}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow6"
      pcbX={8.98}
      pcbY={15.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin3: "net.N5",
        pin2: "net.N7",
        pin1: "net.N11",
        pin5: "net.N12",
        pin6: "net.N13",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-2"
      footprint="0402"
      pcbX={17.58}
      pcbY={-6.84}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N21",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow6"
      pcbX={7.18}
      pcbY={0.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin6: "net.N9",
        pin2: "net.N10",
        pin1: "net.N10",
        pin4: "net.N16",
        pin5: "net.N19",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-3"
      footprint="axial_p0.2in"
      pcbX={2.66}
      pcbY={-13.39}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N21",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-5"
      footprint="pinrow4"
      pcbX={-19.67}
      pcbY={4.29}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N15",
        pin4: "net.N16",
        pin3: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
  </board>
)
