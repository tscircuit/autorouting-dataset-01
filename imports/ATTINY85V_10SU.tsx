/** ATTiny85 microcontroller in SOIC-8. */
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PB5"],
  pin2: ["PB3"],
  pin3: ["PB4"],
  pin4: ["GND"],
  pin5: ["PB0"],
  pin6: ["PB1"],
  pin7: ["PB2"],
  pin8: ["VCC"]
} as const

export const ATTINY85V_10SU = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C152192"
  ]
}}
      manufacturerPartNumber="ATTINY85V_10SU"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.9050000000000864mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6349999999999909mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6349999999999909mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9049999999999727mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9050000000000864mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6349999999999909mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6349999999999909mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.9049999999999727mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<silkscreenpath route={[{"x":-2.6387044000000515,"y":-2.1763989999999467},{"x":-2.6387044000000515,"y":2.1763990000000604},{"x":2.6387044000000515,"y":2.1763990000000604},{"x":2.6387044000000515,"y":-2.1763989999999467},{"x":-2.6387044000000515,"y":-2.1763989999999467}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4652e19b90fa4dbb8662aa4cba61a532&pn=C152192",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}