/** Randomly generated circuit 216. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.56mm"
    height="38.78mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={15.98}
      pcbY={-4.86}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N8",
        pin3: "net.N18",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={6.87}
      pcbY={-4.21}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N10",
        pin3: "net.N14",
      }}
      type="mosfet"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-10.97}
      pcbY={6.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N4",
        pin2: "net.N7",
        pin1: "net.N17",
      }}
      type="mosfet"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-17.26}
      pcbY={-4.6}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={14.83}
      pcbY={12.24}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="2512"
      pcbX={-0.59}
      pcbY={4.71}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={-15.27}
      pcbY={-12.29}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N13",
      }}
    />
    <chip
      name="chip-1"
      footprint="qfn32"
      pcbX={-5.33}
      pcbY={-6.88}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin30: "net.N1",
        pin9: "net.N2",
        pin12: "net.N2",
        pin6: "net.N3",
        pin10: "net.N4",
        pin24: "net.N5",
        pin7: "net.N5",
        pin27: "net.N6",
        pin8: "net.N6",
        pin17: "net.N6",
        pin29: "net.N7",
        pin2: "net.N8",
        pin4: "net.N9",
        pin23: "net.N11",
        pin16: "net.N11",
        pin11: "net.N11",
        pin31: "net.N12",
        pin20: "net.N13",
        pin3: "net.N14",
        pin32: "net.N15",
        pin5: "net.N15",
        pin25: "net.N16",
        pin14: "net.N16",
        pin13: "net.N16",
        pin22: "net.N17",
        pin15: "net.N18",
        pin1: "net.N19",
        pin28: "net.N20",
        pin18: "net.N20",
        pin26: "net.N21",
        pin21: "net.N21",
        pin19: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={14.64}
      pcbY={-12.93}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N3",
        pin1: "net.N3",
        pin3: "net.N12",
        pin2: "net.N14",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={8.75}
      pcbY={11.32}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin4: "net.N10",
        pin1: "net.N12",
        pin3: "net.N15",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow2"
      pcbX={-13.76}
      pcbY={14.21}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N16",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="0805"
      pcbX={15.2}
      pcbY={4.01}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-3.7}
      pcbY={11.74}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N19",
      }}
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={4.32}
      pcbY={-12.83}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N15",
        pin1: "net.N19",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-4"
      footprint="0805"
      pcbX={-16.72}
      pcbY={0.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
      capacitance="0.1uF"
    />
  </board>
)
