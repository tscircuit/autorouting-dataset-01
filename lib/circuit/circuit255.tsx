/** Randomly generated circuit 255. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="38.70mm"
    height="41.41mm"
  >
    <resistor
      name="resistor-1"
      footprint="axial_p0.2in"
      pcbX={13.11}
      pcbY={-14.97}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod323"
      pcbX={2.51}
      pcbY={-13.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N16",
      }}
    />
    <inductor
      name="inductor-1"
      footprint="axial_p0.2in"
      pcbX={-1.31}
      pcbY={12.4}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N11",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={4.94}
      pcbY={-5.44}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="tssop20_p0.5mm"
      pcbX={-13.95}
      pcbY={14.36}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin18: "net.N3",
        pin13: "net.N4",
        pin17: "net.N5",
        pin8: "net.N9",
        pin6: "net.N9",
        pin4: "net.N9",
        pin10: "net.N11",
        pin16: "net.N11",
        pin15: "net.N14",
        pin1: "net.N15",
        pin14: "net.N16",
        pin5: "net.N17",
        pin3: "net.N17",
        pin7: "net.N17",
        pin20: "net.N18",
        pin12: "net.N18",
        pin9: "net.N18",
        pin19: "net.N18",
        pin11: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-4.67}
      pcbY={-13.69}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N15",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-14.55}
      pcbY={-5.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N11",
        pin3: "net.N12",
      }}
      type="pnp"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={1.92}
      pcbY={16.4}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N6",
        pin3: "net.N14",
      }}
      type="mosfet"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={11.08}
      pcbY={-5.6}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }}
    />
    <diode
      name="diode-3"
      footprint="axial_p0.2in"
      pcbX={5.18}
      pcbY={5.8}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N17",
        pin2: "net.N19",
      }}
    />
    <transistor
      name="transistor-3"
      footprint="SOT-223"
      pcbX={14.73}
      pcbY={4.53}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin3: "net.N10",
        pin2: "net.N13",
        pin1: "net.N16",
      }}
      type="bjt"
    />
    <diode
      name="diode-4"
      footprint="axial_p0.2in"
      pcbX={12.98}
      pcbY={14.14}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={-2.88}
      pcbY={-5.25}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-3"
      footprint="1206"
      pcbX={-11.41}
      pcbY={-14.02}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N3",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-23"
      pcbX={-3.88}
      pcbY={2.47}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin1: "net.N2",
        pin3: "net.N6",
        pin2: "net.N10",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-4"
      footprint="1210"
      pcbX={-13.93}
      pcbY={2.14}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N14",
      }}
      inductance="10uH"
    />
  </board>
)
