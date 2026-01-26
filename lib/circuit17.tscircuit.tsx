import { sel } from "tscircuit";

/**
 * 3x3 ortholinear keypad matrix.
 *
 * What the board does:
 * - Nine switch footprints in a 3x3 matrix.
 * - Breaks out ROW1-ROW3 and COL1-COL3 on a 1x6 header.
 */
export default () => {
  const nets = {
    ROW1: sel.net().ROW1,
    ROW2: sel.net().ROW2,
    ROW3: sel.net().ROW3,
    COL1: sel.net().COL1,
    COL2: sel.net().COL2,
    COL3: sel.net().COL3,
  } as const

  const keys = [
    { name: "K1", row: "ROW1", col: "COL1", x: -2.54, y: 6 },
    { name: "K2", row: "ROW1", col: "COL2", x: 2.54, y: 6 },
    { name: "K3", row: "ROW1", col: "COL3", x: 7.62, y: 6 },
    { name: "K4", row: "ROW2", col: "COL1", x: -2.54, y: 0 },
    { name: "K5", row: "ROW2", col: "COL2", x: 2.54, y: 0 },
    { name: "K6", row: "ROW2", col: "COL3", x: 7.62, y: 0 },
    { name: "K7", row: "ROW3", col: "COL1", x: -2.54, y: -6 },
    { name: "K8", row: "ROW3", col: "COL2", x: 2.54, y: -6 },
    { name: "K9", row: "ROW3", col: "COL3", x: 7.62, y: -6 },
  ] as const

  return (
    <board width="32mm" height="24mm">
      <pinheader
        name="J1"
        pinCount={6}
        pitch="2.54mm"
        pcbX={-12}
        pcbY={0}
        pcbRotation={90}
        connections={{
          pin1: nets.ROW1,
          pin2: nets.ROW2,
          pin3: nets.ROW3,
          pin4: nets.COL1,
          pin5: nets.COL2,
          pin6: nets.COL3,
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
