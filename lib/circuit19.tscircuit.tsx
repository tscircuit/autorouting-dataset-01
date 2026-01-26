import { sel } from "tscircuit";

/**
 * Split ergonomic keyboard matrix (3x6 per side).
 *
 * What the board does:
 * - Two mirrored 3x6 key clusters sharing the same row/column nets.
 * - Breaks out ROW1-ROW3 and COL1-COL6 on a 1x9 header.
 */
export default () => {
  const nets = {
    ROW1: sel.net().ROW1,
    ROW2: sel.net().ROW2,
    ROW3: sel.net().ROW3,
    COL1: sel.net().COL1,
    COL2: sel.net().COL2,
    COL3: sel.net().COL3,
    COL4: sel.net().COL4,
    COL5: sel.net().COL5,
    COL6: sel.net().COL6,
  } as const

  const leftKeys = [
    { name: "L1", row: "ROW1", col: "COL1", x: -14, y: 8 },
    { name: "L2", row: "ROW1", col: "COL2", x: -9, y: 8 },
    { name: "L3", row: "ROW1", col: "COL3", x: -4, y: 8 },
    { name: "L4", row: "ROW1", col: "COL4", x: 1, y: 8 },
    { name: "L5", row: "ROW1", col: "COL5", x: 6, y: 8 },
    { name: "L6", row: "ROW1", col: "COL6", x: 11, y: 8 },
    { name: "L7", row: "ROW2", col: "COL1", x: -14, y: 2 },
    { name: "L8", row: "ROW2", col: "COL2", x: -9, y: 2 },
    { name: "L9", row: "ROW2", col: "COL3", x: -4, y: 2 },
    { name: "L10", row: "ROW2", col: "COL4", x: 1, y: 2 },
    { name: "L11", row: "ROW2", col: "COL5", x: 6, y: 2 },
    { name: "L12", row: "ROW2", col: "COL6", x: 11, y: 2 },
    { name: "L13", row: "ROW3", col: "COL1", x: -14, y: -4 },
    { name: "L14", row: "ROW3", col: "COL2", x: -9, y: -4 },
    { name: "L15", row: "ROW3", col: "COL3", x: -4, y: -4 },
    { name: "L16", row: "ROW3", col: "COL4", x: 1, y: -4 },
    { name: "L17", row: "ROW3", col: "COL5", x: 6, y: -4 },
    { name: "L18", row: "ROW3", col: "COL6", x: 11, y: -4 },
  ] as const

  const rightKeys = leftKeys.map((key) => ({
    ...key,
    name: `R${key.name.slice(1)}`,
    x: key.x + 30,
  }))

  return (
    <board width="90mm" height="30mm">
      <pinheader
        name="J1"
        pinCount={9}
        pitch="2.54mm"
        pcbX={-36}
        pcbY={0}
        pcbRotation={90}
        connections={{
          pin1: nets.ROW1,
          pin2: nets.ROW2,
          pin3: nets.ROW3,
          pin4: nets.COL1,
          pin5: nets.COL2,
          pin6: nets.COL3,
          pin7: nets.COL4,
          pin8: nets.COL5,
          pin9: nets.COL6,
        }}
      />

      {leftKeys.map((key) => (
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

      {rightKeys.map((key) => (
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
