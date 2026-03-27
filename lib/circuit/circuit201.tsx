/** Randomly generated circuit 201. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.10mm"
    height="38.43mm"
  >
    <chip
      name="chip-1"
      footprint="tssop20"
      pcbX={-15.01}
      pcbY={-13.48}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin7: "net.N1",
        pin5: "net.N2",
        pin10: "net.N4",
        pin14: "net.N5",
        pin11: "net.N6",
        pin20: "net.N6",
        pin15: "net.N12",
        pin3: "net.N13",
        pin4: "net.N13",
        pin17: "net.N14",
        pin6: "net.N14",
        pin16: "net.N15",
        pin8: "net.N16",
        pin2: "net.N16",
        pin18: "net.N17",
        pin9: "net.N17",
        pin1: "net.N18",
        pin19: "net.N20",
        pin13: "net.N21",
        pin12: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={1.45}
      pcbY={-9.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N11",
      }}
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={14.27}
      pcbY={-13.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin4: "net.N9",
        pin3: "net.N9",
        pin1: "net.N17",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={16.34}
      pcbY={4.31}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N5",
        pin1: "net.N10",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={14.17}
      pcbY={-5.35}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N13",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="1206"
      pcbX={-4.11}
      pcbY={10.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={4.53}
      pcbY={-3.85}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N13",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-13.14}
      pcbY={14.91}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N18",
        pin3: "net.N19",
      }}
      type="bjt"
    />
    <inductor
      name="inductor-1"
      footprint="0402"
      pcbX={4.4}
      pcbY={1.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-15.16}
      pcbY={5.02}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={3.64}
      pcbY={12.64}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="soic8_p1.27mm"
      pcbX={15.54}
      pcbY={13.57}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin8: "net.N1",
        pin1: "net.N4",
        pin7: "net.N7",
        pin3: "net.N9",
        pin2: "net.N10",
        pin6: "net.N11",
        pin4: "net.N15",
        pin5: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="1206"
      pcbX={-3.99}
      pcbY={-3.85}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin1: "net.N7",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-3.02}
      pcbY={-14.79}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N20",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-3"
      footprint="1210"
      pcbX={-13.24}
      pcbY={-1.03}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N4",
        pin1: "net.N18",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-3"
      footprint="1210"
      pcbX={-3.43}
      pcbY={2.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N10",
      }}
      resistance="1k"
    />
  </board>
)
