/** Randomly generated circuit 294. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="45.17mm"
    height="41.25mm"
  >
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={6.67}
      pcbY={-8.76}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={0.83}
      pcbY={7.75}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={-8.59}
      pcbY={-13.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N15",
      }}
      type="mosfet"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-14.63}
      pcbY={5.38}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N16",
      }}
    />
    <diode
      name="diode-3"
      footprint="sod123"
      pcbX={17.36}
      pcbY={15.52}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N3",
      }}
    />
    <inductor
      name="inductor-2"
      footprint="0805"
      pcbX={6.1}
      pcbY={-15.79}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N10",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-4"
      footprint="sod123"
      pcbX={-18.17}
      pcbY={14.6}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N10",
        pin2: "net.N14",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-8.23}
      pcbY={5.28}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N7",
        pin3: "net.N13",
        pin1: "net.N16",
      }}
      type="bjt"
    />
    <chip
      name="chip-1"
      footprint="qfp16"
      pcbX={13.97}
      pcbY={3.08}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin5: "net.N1",
        pin8: "net.N1",
        pin4: "net.N1",
        pin10: "net.N2",
        pin12: "net.N2",
        pin6: "net.N4",
        pin1: "net.N6",
        pin14: "net.N6",
        pin13: "net.N8",
        pin16: "net.N9",
        pin7: "net.N10",
        pin2: "net.N14",
        pin3: "net.N15",
        pin11: "net.N16",
        pin15: "net.N18",
        pin9: "net.N18",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-1"
      footprint="1206"
      pcbX={17.56}
      pcbY={-16.75}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N16",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-3"
      footprint="1206"
      pcbX={1.21}
      pcbY={12.52}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-4"
      footprint="0603"
      pcbX={-15.76}
      pcbY={-14.26}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-2"
      footprint="tssop8"
      pcbX={-8.62}
      pcbY={14.5}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin7: "net.N3",
        pin4: "net.N5",
        pin1: "net.N6",
        pin8: "net.N7",
        pin5: "net.N9",
        pin2: "net.N11",
        pin6: "net.N11",
        pin3: "net.N15",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-5"
      footprint="sod123"
      pcbX={0.72}
      pcbY={0.31}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="2512"
      pcbX={8.68}
      pcbY={14.66}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N13",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-5"
      footprint="axial_p0.2in"
      pcbX={-16.02}
      pcbY={-7.85}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N17",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-6"
      footprint="sod123"
      pcbX={-8.66}
      pcbY={-7.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N10",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="1210"
      pcbX={16.94}
      pcbY={-9.85}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N15",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
  </board>
)
