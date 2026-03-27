/** Randomly generated circuit 276. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="35.63mm"
    height="40.39mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow4"
      pcbX={-10.26}
      pcbY={3.54}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin4: "net.N7",
        pin1: "net.N10",
        pin3: "net.N11",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={-4.01}
      pcbY={-4.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N8",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow2"
      pcbX={2.58}
      pcbY={-12.11}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N7",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-2"
      footprint="0603"
      pcbX={12.27}
      pcbY={14.05}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={-0.99}
      pcbY={6.01}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N5",
        pin1: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0805"
      pcbX={-4.53}
      pcbY={12.54}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N11",
      }}
      capacitance="0.1uF"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={-6.41}
      pcbY={-15.94}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N1",
        pin1: "net.N8",
      }}
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-10.26}
      pcbY={-10.49}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N4",
        pin2: "net.N4",
        pin1: "net.N5",
        pin3: "net.N12",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-3"
      footprint="0603"
      pcbX={-10.18}
      pcbY={14.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N6",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-3"
      footprint="axial_p0.2in"
      pcbX={11.58}
      pcbY={-11.11}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N8",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={3.49}
      pcbY={13.17}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin2: "net.N6",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-4"
      footprint="pinrow2"
      pcbX={-12.48}
      pcbY={-4.02}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N10",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={5.2}
      pcbY={-3.77}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N11",
        pin1: "net.N12",
        pin2: "net.N12",
      }}
      type="npn"
    />
    <chip
      name="chip-1"
      footprint="tssop8"
      pcbX={7.66}
      pcbY={4.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N1",
        pin8: "net.N1",
        pin3: "net.N5",
        pin7: "net.N7",
        pin1: "net.N8",
        pin5: "net.N9",
        pin4: "net.N10",
        pin2: "net.N10",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={12.45}
      pcbY={-4.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N6",
      }}
    />
  </board>
)
