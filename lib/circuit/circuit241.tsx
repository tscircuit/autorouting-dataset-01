/** Randomly generated circuit 241. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="44.57mm"
    height="43.95mm"
  >
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={2.1}
      pcbY={-5.42}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin4: "net.N2",
        pin3: "net.N5",
        pin6: "net.N11",
        pin1: "net.N11",
        pin2: "net.N18",
        pin5: "net.N22",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={8.14}
      pcbY={15.74}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N15",
        pin3: "net.N21",
      }}
      type="jfet"
    />
    <transistor
      name="transistor-2"
      footprint="SOT-23"
      pcbX={-8.2}
      pcbY={8.19}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
        pin3: "net.N20",
      }}
      type="pnp"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={-16.61}
      pcbY={8.34}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin2: "net.N13",
        pin1: "net.N21",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-1"
      footprint="1206"
      pcbX={8.81}
      pcbY={7.91}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N17",
      }}
      capacitance="0.1uF"
    />
    <chip
      name="chip-1"
      footprint="qfn24_w6_h6_p0.8mm_thermalpad_startingpin(topside,rightpin)_ccw"
      pcbX={1.57}
      pcbY={-16.08}
      pcbRotation={180.0}
      layer="top"
      connections={{
        pin16: "net.N2",
        pin11: "net.N2",
        pin8: "net.N3",
        pin24: "net.N3",
        pin18: "net.N3",
        pin21: "net.N3",
        pin4: "net.N6",
        pin9: "net.N8",
        pin17: "net.N8",
        pin13: "net.N8",
        pin12: "net.N9",
        pin19: "net.N9",
        pin3: "net.N10",
        pin23: "net.N10",
        pin1: "net.N12",
        pin6: "net.N12",
        pin10: "net.N13",
        pin7: "net.N15",
        pin14: "net.N16",
        pin5: "net.N16",
        pin15: "net.N16",
        pin22: "net.N17",
        pin20: "net.N20",
        pin2: "net.N21",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={-7.43}
      pcbY={1.11}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-2"
      footprint="1206"
      pcbX={-6.98}
      pcbY={14.37}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N22",
      }}
      inductance="10uH"
    />
    <pinheader
      name="pinhead-2"
      footprint="pinrow4"
      pcbX={14.23}
      pcbY={1.08}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
        pin4: "net.N7",
        pin3: "net.N20",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={-17.45}
      pcbY={-7.2}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-14.8}
      pcbY={14.98}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N1",
        pin1: "net.N20",
        pin2: "net.N22",
      }}
      type="pnp"
    />
    <diode
      name="diode-1"
      footprint="axial_p0.2in"
      pcbX={-14.48}
      pcbY={-16.48}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N8",
        pin2: "net.N19",
      }}
    />
    <capacitor
      name="capacitor-3"
      footprint="1210"
      pcbX={16.87}
      pcbY={-7.78}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin2: "net.N6",
        pin1: "net.N19",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-3"
      footprint="pinrow4"
      pcbX={-0.18}
      pcbY={8.54}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin3: "net.N13",
        pin1: "net.N14",
        pin4: "net.N14",
      }}
      pinCount={4}
      pitch="2.54mm"
    />
    <capacitor
      name="capacitor-4"
      footprint="1206"
      pcbX={-9.9}
      pcbY={-6.6}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin2: "net.N2",
        pin1: "net.N7",
      }}
      capacitance="0.1uF"
    />
    <resistor
      name="resistor-1"
      footprint="0402"
      pcbX={14.63}
      pcbY={7.29}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N12",
        pin2: "net.N19",
      }}
      resistance="1k"
    />
    <diode
      name="diode-2"
      footprint="sod323"
      pcbX={-14.84}
      pcbY={1.62}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N7",
        pin2: "net.N18",
      }}
    />
  </board>
)
