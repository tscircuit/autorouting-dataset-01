/** 3-pin component footprint used in circuit02. */
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const VGF39NCHXT_B103 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C22461454"
  ]
}}
      manufacturerPartNumber="VGF39NCHXT_B103"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="1.7750028000000384mm" pcbY="-0.9999979999998914mm" width="1.1999975999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.5750031999999692mm" pcbY="0.008890000000064902mm" width="1.5999967999999998mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.7750028000000384mm" pcbY="0.999998000000005mm" width="1.1999975999999999mm" height="1.1999975999999999mm" shape="rect" />
<silkscreenpath route={[{"x":2.0069301999999425,"y":0.2541016000000127},{"x":2.0069301999999425,"y":-0.2538983999999118}]} />
<silkscreenpath route={[{"x":-1.8030698000001166,"y":-0.9722357999999076},{"x":-1.8030698000001166,"y":-1.5238984000000073},{"x":0.8639301999999134,"y":-1.5238984000000073}]} />
<silkscreenpath route={[{"x":0.8187689999998611,"y":1.5241015999999945},{"x":-1.8030698000001166,"y":1.5241015999999945},{"x":-1.8030698000001166,"y":0.9900158000000374}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e9297dc616d24881a01257e804dc42a9&pn=C22461454",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00005080000016732811, y: 1.1368683772161603e-13, z: 0.289 },
      }}
      {...props}
    />
  )
}