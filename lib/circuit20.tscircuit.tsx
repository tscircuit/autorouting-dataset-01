import { sel } from "tscircuit";

/**
 * 5x12 full-size keyboard matrix.
 *
 * What the board does:
 * - Sixty switch footprints in a 5x12 matrix.
 * - Breaks out VCC/GND plus rows/cols on a 1x19 header.
 * - Adds a decoupling capacitor on the supply.
 */
export default () => {
  const nets = {
    VCC: sel.net().VCC,
    GND: sel.net.GND,
    ROW1: sel.net().ROW1,
    ROW2: sel.net().ROW2,
    ROW3: sel.net().ROW3,
    ROW4: sel.net().ROW4,
    ROW5: sel.net().ROW5,
    COL1: sel.net().COL1,
    COL2: sel.net().COL2,
    COL3: sel.net().COL3,
    COL4: sel.net().COL4,
    COL5: sel.net().COL5,
    COL6: sel.net().COL6,
    COL7: sel.net().COL7,
    COL8: sel.net().COL8,
    COL9: sel.net().COL9,
    COL10: sel.net().COL10,
    COL11: sel.net().COL11,
    COL12: sel.net().COL12,
  } as const

  const rows = [
    { name: "ROW1", y: 10 },
    { name: "ROW2", y: 5 },
    { name: "ROW3", y: 0 },
    { name: "ROW4", y: -5 },
    { name: "ROW5", y: -10 },
  ] as const

  const cols = [
    { name: "COL1", x: -22 },
    { name: "COL2", x: -17 },
    { name: "COL3", x: -12 },
    { name: "COL4", x: -7 },
    { name: "COL5", x: -2 },
    { name: "COL6", x: 3 },
    { name: "COL7", x: 8 },
    { name: "COL8", x: 13 },
    { name: "COL9", x: 18 },
    { name: "COL10", x: 23 },
    { name: "COL11", x: 28 },
    { name: "COL12", x: 33 },
  ] as const

  const keys = rows.flatMap((row, rowIndex) =>
    cols.map((col, colIndex) => ({
      name: `K${rowIndex + 1}_${colIndex + 1}`,
      row: row.name,
      col: col.name,
      x: col.x,
      y: row.y,
    }))
  )

  return (
    <board width="120mm" height="40mm">
      <pinheader
        name="J1"
        pinCount={19}
        pitch="2.54mm"
        pcbX={-54}
        pcbY={0}
        pcbRotation={90}
        connections={{
          pin1: nets.VCC,
          pin2: nets.GND,
          pin3: nets.ROW1,
          pin4: nets.ROW2,
          pin5: nets.ROW3,
          pin6: nets.ROW4,
          pin7: nets.ROW5,
          pin8: nets.COL1,
          pin9: nets.COL2,
          pin10: nets.COL3,
          pin11: nets.COL4,
          pin12: nets.COL5,
          pin13: nets.COL6,
          pin14: nets.COL7,
          pin15: nets.COL8,
          pin16: nets.COL9,
          pin17: nets.COL10,
          pin18: nets.COL11,
          pin19: nets.COL12,
        }}
      />

      <capacitor
        name="C1"
        capacitance="0.1uF"
        footprint="0603"
        pcbX={-44}
        pcbY={-12}
        connections={{
          pin1: nets.VCC,
          pin2: nets.GND,
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
