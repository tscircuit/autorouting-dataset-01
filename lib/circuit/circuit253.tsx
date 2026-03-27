/** Randomly generated circuit 253. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    layers={4}
    width="40.29mm"
    height="44.41mm"
  >
    <transistor
      name="transistor-1"
      footprint="SOT-23"
      pcbX={14.71}
      pcbY={13.29}
      pcbRotation={270.0}
      layer="top"
      connections={{
        pin3: "net.N6",
        pin2: "net.N7",
        pin1: "net.N16",
      }}
      type="npn"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-14.48}
      pcbY={-0.79}
      pcbRotation={90.0}
      layer="bottom"
      connections={{
        pin1: "net.N14",
        pin2: "net.N15",
      }}
    />
    <transistor
      name="transistor-2"
      footprint="SOT-223"
      pcbX={-2.8}
      pcbY={13.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N10",
        pin1: "net.N19",
        pin3: "net.N19",
      }}
      type="npn"
    />
    <resistor
      name="resistor-1"
      footprint="2512"
      pcbX={13.37}
      pcbY={-15.16}
      pcbRotation={270.0}
      layer="bottom"
      connections={{
        pin1: "net.N4",
        pin2: "net.N8",
      }}
      resistance="1k"
    />
    <resistor
      name="resistor-2"
      footprint="1210"
      pcbX={-15.12}
      pcbY={6.64}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N9",
        pin2: "net.N14",
      }}
      resistance="1k"
    />
    <pinheader
      name="pinhead-1"
      footprint="pinrow6"
      pcbX={-5.4}
      pcbY={-7.65}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin6: "net.N3",
        pin2: "net.N10",
        pin1: "net.N12",
        pin3: "net.N16",
        pin4: "net.N17",
        pin5: "net.N18",
      }}
      pinCount={6}
      pitch="2.54mm"
    />
    <inductor
      name="inductor-1"
      footprint="2512"
      pcbX={-4.52}
      pcbY={5.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N8",
        pin1: "net.N13",
      }}
      inductance="10uH"
    />
    <resistor
      name="resistor-3"
      footprint="0603"
      pcbX={-13.47}
      pcbY={16.24}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N10",
      }}
      resistance="1k"
    />
    <capacitor
      name="capacitor-1"
      footprint="0805"
      pcbX={4.29}
      pcbY={-1.47}
      pcbRotation={90.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N12",
      }}
      capacitance="0.1uF"
    />
    <transistor
      name="transistor-3"
      footprint="SOT-23"
      pcbX={-4.19}
      pcbY={-1.59}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N9",
        pin1: "net.N11",
        pin3: "net.N15",
      }}
      type="npn"
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={13.79}
      pcbY={-4.53}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin2: "net.N13",
      }}
    />
    <chip
      name="chip-1"
      footprint="tssop20"
      pcbX={-11.35}
      pcbY={-16.8}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N1",
        pin16: "net.N1",
        pin18: "net.N2",
        pin17: "net.N2",
        pin19: "net.N3",
        pin13: "net.N5",
        pin4: "net.N5",
        pin6: "net.N6",
        pin12: "net.N7",
        pin8: "net.N7",
        pin20: "net.N8",
        pin11: "net.N11",
        pin14: "net.N11",
        pin5: "net.N14",
        pin7: "net.N16",
        pin9: "net.N17",
        pin2: "net.N17",
        pin10: "net.N17",
        pin15: "net.N18",
        pin3: "net.N19",
      }}
      manufacturerPartNumber="GENERIC"
    />
    <transistor
      name="transistor-4"
      footprint="SOT-223"
      pcbX={5.86}
      pcbY={6.27}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N6",
        pin3: "net.N9",
        pin2: "net.N15",
      }}
      type="npn"
    />
    <transistor
      name="transistor-5"
      footprint="SOT-23"
      pcbX={14.47}
      pcbY={2.97}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin3: "net.N5",
        pin2: "net.N13",
        pin1: "net.N13",
      }}
      type="pnp"
    />
    <resistor
      name="resistor-4"
      footprint="2512"
      pcbX={5.1}
      pcbY={-15.72}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N5",
      }}
      resistance="1k"
    />
  </board>
)
