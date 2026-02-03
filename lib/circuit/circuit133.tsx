/** Randomly generated circuit 133. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board
    routingDisabled={!shouldAutorouterRun()}
    width="14.00mm"
    height="22.00mm"
  >
    <capacitor
      name="capacitor-1"
      footprint="0402"
      pcbX={1.0}
      pcbY={5.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N3",
      }}
      capacitance="0.1uF"
    />
    <capacitor
      name="capacitor-2"
      footprint="0603"
      pcbX={-1.0}
      pcbY={-6.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N4",
        pin1: "net.N5",
      }}
      capacitance="0.1uF"
    />
    <inductor
      name="inductor-1"
      footprint="0805"
      pcbX={2.0}
      pcbY={8.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin2: "net.N2",
        pin1: "net.N6",
      }}
      inductance="10uH"
    />
    <diode
      name="diode-1"
      footprint="sod123"
      pcbX={-3.0}
      pcbY={3.0}
      pcbRotation={45.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N6",
      }}
    />
    <diode
      name="diode-2"
      footprint="sod123"
      pcbX={4.0}
      pcbY={4.0}
      pcbRotation={0.0}
      layer="top"
      connections={{
        pin1: "net.N4",
        pin2: "net.N7",
      }}
    />
    <chip
      name="chip-1"
      footprint="dip8"
      pcbX={4.0}
      pcbY={-8.0}
      pcbRotation={0.0}
      layer="bottom"
      connections={{
        pin4: "net.N1",
        pin7: "net.N1",
        pin1: "net.N3",
        pin6: "net.N3",
        pin8: "net.N5",
        pin3: "net.N5",
        pin5: "net.N6",
        pin2: "net.N7",
      }}
      manufacturerPartNumber="GENERIC"
    />
  </board>
)
