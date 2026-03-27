/** Randomly generated circuit 243. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="41.00mm"
    height="47.16mm"
  >
    <chip
      name="chip-1"
      footprint="soic16"
      pcbX={-14.85}
      pcbY={-4.03}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin13: "net.N5",
        pin9: "net.N6",
        pin5: "net.N6",
        pin6: "net.N7",
        pin15: "net.N7",
        pin10: "net.N9",
        pin1: "net.N14",
        pin14: "net.N14",
        pin12: "net.N16",
        pin3: "net.N17",
        pin4: "net.N18",
        pin2: "net.N18",
        pin7: "net.N19",
        pin11: "net.N21",
        pin8: "net.N22",
        pin16: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <capacitor
      name="capacitor-1"
      footprint="0603"
      pcbX={6.05}
      pcbY={14.57}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin1: "net.N13",
        pin2: "net.N23",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="1210"
      pcbX={13.16}
      pcbY={-19.07}
      pcbRotation={180.0}
      layer="bottom"
      connections={{
        pin2: "net.N7",
        pin1: "net.N9",
      }}
      inductance="10uH"
    />
    <inductor
      name="inductor-2"
      footprint="0402"
      pcbX={-12.7}
      pcbY={10.5}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N9",
      }}
      inductance="10uH"
    />
    <capacitor
      name="capacitor-2"
      footprint="0402"
      pcbX={14.08}
      pcbY={17.06}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N3",
        pin2: "net.N27",
      }}
      capacitance="0.1uF"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={6.19}
      pcbY={-0.17}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N2",
        pin5: "net.N8",
        pin3: "net.N10",
        pin4: "net.N24",
        pin1: "net.N25",
        pin2: "net.N27",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <chip
      name="chip-2"
      footprint="qfn24"
      pcbX={14.04}
      pcbY={-8.34}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin22: "net.N1",
        pin21: "net.N7",
        pin23: "net.N8",
        pin9: "net.N8",
        pin10: "net.N10",
        pin8: "net.N10",
        pin4: "net.N12",
        pin14: "net.N12",
        pin24: "net.N13",
        pin3: "net.N13",
        pin11: "net.N14",
        pin16: "net.N14",
        pin13: "net.N15",
        pin20: "net.N16",
        pin6: "net.N17",
        pin7: "net.N18",
        pin2: "net.N18",
        pin18: "net.N20",
        pin1: "net.N21",
        pin5: "net.N23",
        pin17: "net.N25",
        pin19: "net.N26",
        pin12: "net.N26",
        pin15: "net.N27",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-3"
      footprint="2512"
      pcbX={-5.79}
      pcbY={11.39}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N2",
        pin2: "net.N21",
      }}
      inductance="10uH"
    />
    <chip
      name="chip-3"
      footprint="tssop16"
      pcbX={-11.59}
      pcbY={-18.68}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N3",
        pin14: "net.N4",
        pin12: "net.N4",
        pin1: "net.N8",
        pin11: "net.N17",
        pin3: "net.N19",
        pin4: "net.N20",
        pin10: "net.N20",
        pin16: "net.N20",
        pin5: "net.N22",
        pin13: "net.N22",
        pin6: "net.N24",
        pin7: "net.N25",
        pin15: "net.N26",
        pin8: "net.N27",
        pin9: "net.N28",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <inductor
      name="inductor-4"
      footprint="axial_p0.2in"
      pcbX={-1.96}
      pcbY={-5.64}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N16",
        pin2: "net.N19",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-1"
      footprint="1210"
      pcbX={3.6}
      pcbY={-17.11}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N11",
        pin1: "net.N12",
      }}
      resistance="1k"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={5.9}
      pcbY={5.89}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin2: "net.N17",
        pin1: "net.N25",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={-1.91}
      pcbY={16.72}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N12",
        pin1: "net.N15",
      }}
    />
    <resistor
      name="resistor-2"
      footprint="axial_p0.2in"
      pcbX={-14.26}
      pcbY={18.99}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N11",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-3"
      footprint="2512"
      pcbX={13.95}
      pcbY={6.16}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N1",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
  </board>
)
