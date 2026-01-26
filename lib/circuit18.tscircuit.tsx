import { sel } from "tscircuit";

/**
 * 4x4 numpad-style matrix with pull-ups.
 *
 * What the board does:
 * - Sixteen switch footprints in a 4x4 matrix.
 * - Breaks out VCC/GND plus rows/cols on a 1x10 header.
 * - Adds row pull-up resistors to VCC.
 */
export default () => {
  const nets = {
    VCC: sel.net().VCC,
    GND: sel.net.GND,
    ROW1: sel.net().ROW1,
    ROW2: sel.net().ROW2,
    ROW3: sel.net().ROW3,
    ROW4: sel.net().ROW4,
    COL1: sel.net().COL1,
    COL2: sel.net().COL2,
    COL3: sel.net().COL3,
    COL4: sel.net().COL4,
  } as const

  const keys = [
    { name: "K1", row: "ROW1", col: "COL1", x: -5.08, y: 9 },
    { name: "K2", row: "ROW1", col: "COL2", x: 0, y: 9 },
    { name: "K3", row: "ROW1", col: "COL3", x: 5.08, y: 9 },
    { name: "K4", row: "ROW1", col: "COL4", x: 10.16, y: 9 },
    { name: "K5", row: "ROW2", col: "COL1", x: -5.08, y: 3 },
    { name: "K6", row: "ROW2", col: "COL2", x: 0, y: 3 },
    { name: "K7", row: "ROW2", col: "COL3", x: 5.08, y: 3 },
    { name: "K8", row: "ROW2", col: "COL4", x: 10.16, y: 3 },
    { name: "K9", row: "ROW3", col: "COL1", x: -5.08, y: -3 },
    { name: "K10", row: "ROW3", col: "COL2", x: 0, y: -3 },
    { name: "K11", row: "ROW3", col: "COL3", x: 5.08, y: -3 },
    { name: "K12", row: "ROW3", col: "COL4", x: 10.16, y: -3 },
    { name: "K13", row: "ROW4", col: "COL1", x: -5.08, y: -9 },
    { name: "K14", row: "ROW4", col: "COL2", x: 0, y: -9 },
    { name: "K15", row: "ROW4", col: "COL3", x: 5.08, y: -9 },
    { name: "K16", row: "ROW4", col: "COL4", x: 10.16, y: -9 },
  ] as const

  return (
    <board width="40mm" height="30mm">
      <pinheader
        name="J1"
        pinCount={10}
        pitch="2.54mm"
        pcbX={-16}
        pcbY={0}
        pcbRotation={90}
        connections={{
          pin1: nets.VCC,
          pin2: nets.GND,
          pin3: nets.ROW1,
          pin4: nets.ROW2,
          pin5: nets.ROW3,
          pin6: nets.ROW4,
          pin7: nets.COL1,
          pin8: nets.COL2,
          pin9: nets.COL3,
          pin10: nets.COL4,
        }}
      />

      <resistor
        name="R1"
        resistance="10k"
        footprint="0603"
        pcbX={-10}
        pcbY={12}
        connections={{
          pin1: nets.VCC,
          pin2: nets.ROW1,
        }}
      />
      <resistor
        name="R2"
        resistance="10k"
        footprint="0603"
        pcbX={-6}
        pcbY={12}
        connections={{
          pin1: nets.VCC,
          pin2: nets.ROW2,
        }}
      />
      <resistor
        name="R3"
        resistance="10k"
        footprint="0603"
        pcbX={-2}
        pcbY={12}
        connections={{
          pin1: nets.VCC,
          pin2: nets.ROW3,
        }}
      />
      <resistor
        name="R4"
        resistance="10k"
        footprint="0603"
        pcbX={2}
        pcbY={12}
        connections={{
          pin1: nets.VCC,
          pin2: nets.ROW4,
        }}
      />

      {keys.map((key) => (
        <pinheader
          key={key.name}
          name={key.name}
          pinCount={2}
          pitch="2.54mm"
          pcbX={key.x}
          pcbY={key.y}
          connections={{
            pin1: nets[key.row],
            pin2: nets[key.col],
          }}
        />
      ))}
    </board>
  )
}
