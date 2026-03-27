/** Randomly generated circuit 239. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.31mm"
    height="40.65mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={-6.95}
      pcbY={12.29}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="1206"
      pcbX={-3.69}
      pcbY={-15.11}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={19.05}
      pcbY={5.03}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N14",
      }}
    />
    <chip
      name="chip-1"
      footprint="tqfp32"
      pcbX={6.28}
      pcbY={11.15}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin20: "net.N1",
        pin4: "net.N2",
        pin12: "net.N3",
        pin18: "net.N3",
        pin17: "net.N4",
        pin8: "net.N5",
        pin31: "net.N7",
        pin23: "net.N7",
        pin28: "net.N7",
        pin29: "net.N8",
        pin5: "net.N9",
        pin27: "net.N10",
        pin3: "net.N11",
        pin2: "net.N11",
        pin16: "net.N11",
        pin7: "net.N13",
        pin24: "net.N13",
        pin19: "net.N14",
        pin13: "net.N15",
        pin26: "net.N16",
        pin21: "net.N16",
        pin11: "net.N17",
        pin1: "net.N17",
        pin10: "net.N17",
        pin32: "net.N18",
        pin22: "net.N18",
        pin15: "net.N18",
        pin30: "net.N19",
        pin9: "net.N20",
        pin6: "net.N21",
        pin14: "net.N21",
        pin25: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={-4.17}
      pcbY={-3.36}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="1206"
      pcbX={3.9}
      pcbY={-1.9}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="0402"
      pcbX={-7.68}
      pcbY={3.81}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0603"
      pcbX={3.52}
      pcbY={-8.01}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-4"
      footprint="0402"
      pcbX={-15.27}
      pcbY={14.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={18.28}
      pcbY={14.26}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N16",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={4.38}
      pcbY={-15.11}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N9",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0402"
      pcbX={15.92}
      pcbY={-14.06}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N15",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-15.27}
      pcbY={5.22}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N11",
        pin3: "net.N13",
      }}
      type="mosfet"
    />
    <resistor
      name="resistor-4"
      footprint="1210"
      pcbX={13.49}
      pcbY={-3.81}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={-14.47}
      pcbY={-12.54}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-13.29}
      pcbY={-5.62}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N12",
        pin3: "net.N17",
      }}
      type="jfet"
    />
  </board>
)
