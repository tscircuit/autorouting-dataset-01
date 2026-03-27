/** Randomly generated circuit 244. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="40.58mm"
    height="39.19mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow2"
      pcbX={13.74}
      pcbY={13.44}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N8",
        pin2: "net.N14",
      }}
      pinCount={2}
      pitch="2.54mm"
    />
    <resistor
      name="resistor-1"
      footprint="0805"
      pcbX={4.88}
      pcbY={-5.96}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <chip
      name="chip-1"
      footprint="ssop16"
      pcbX={-1.54}
      pcbY={4.34}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin15: "net.N1",
        pin13: "net.N2",
        pin5: "net.N3",
        pin3: "net.N4",
        pin11: "net.N5",
        pin16: "net.N5",
        pin14: "net.N5",
        pin9: "net.N6",
        pin1: "net.N6",
        pin2: "net.N8",
        pin12: "net.N9",
        pin6: "net.N10",
        pin4: "net.N10",
        pin8: "net.N11",
        pin10: "net.N11",
        pin7: "net.N14",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={4.11}
      pcbY={-11.99}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-15.12}
      pcbY={4.45}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N13",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={-4.34}
      pcbY={15.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N7",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-223"
      pcbX={-15.43}
      pcbY={11.25}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N5",
        pin3: "net.N11",
        pin2: "net.N13",
      }}
      type="mosfet"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={13.82}
      pcbY={4.43}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N12",
      }}
    />
    <resistor
      name="resistor-4"
      footprint="0603"
      pcbX={14.48}
      pcbY={-13.04}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N6",
        pin2: "net.N7",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-5"
      footprint="0805"
      pcbX={5.27}
      pcbY={13.8}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N7",
        pin2: "net.N13",
      }}
      resistance="1k"
    />
    <inductor
      name="inductor-2"
      footprint="1210"
      pcbX={-15.27}
      pcbY={-4.41}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N2",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-4.74}
      pcbY={-12.63}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin2: "net.N3",
        pin3: "net.N12",
      }}
      type="jfet"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-14.73}
      pcbY={-12.86}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N9",
      }}
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={13.26}
      pcbY={-2.69}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N9",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={9.64}
      pcbY={5.79}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
  </board>
)
