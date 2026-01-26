/** Toshiba TC78H670FTG motor driver IC footprint. */
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["MODE3_CW_CCW"],
  pin2: ["AGND"],
  pin3: ["VM"],
  pin4: ["PGND_A"],
  pin5: ["OUT_A_POS"],
  pin6: ["OUT_A_NEG"],
  pin7: ["OUT_B_NEG"],
  pin8: ["OUT_B_POS"],
  pin9: ["PGND_B"],
  pin10: ["VREF"],
  pin11: ["OSCM"],
  pin12: ["STBY"],
  pin13: ["EN_ERR"],
  pin14: ["MODE0_UP_DW"],
  pin15: ["MODE1_SET_EN_LATCH"],
  pin16: ["MODE2_CLK_S_CLK"],
  pin17: ["GND_PAD"]
} as const

export const TC78H670FTG_EL = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C6331347"
  ]
}}
      manufacturerPartNumber="TC78H670FTG_EL"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.4999970000000076mm" pcbY="0.7491729999999279mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.4999970000000076mm" pcbY="0.24879299999997784mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.4999970000000076mm" pcbY="-0.24904700000001867mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.4999970000000076mm" pcbY="-0.7494270000000824mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7491730000000416mm" pcbY="-1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.24879299999997784mm" pcbY="-1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24904700000001867mm" pcbY="-1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.7494270000000824mm" pcbY="-1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.4999970000000076mm" pcbY="-0.7494270000000824mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.4999970000000076mm" pcbY="-0.24904700000001867mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.4999970000000076mm" pcbY="0.24879299999997784mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.4999970000000076mm" pcbY="0.7491729999999279mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.7494270000000824mm" pcbY="1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.24904700000001867mm" pcbY="1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.24879299999997784mm" pcbY="1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.7491730000000416mm" pcbY="1.4999970000000076mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.0001269999999067295mm" pcbY="-0.0001269999999067295mm" width="1.6999966mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":1.5000986000000012,"y":1.5000477999999475},{"x":1.5000986000000012,"y":1.044295600000055}]} />
<silkscreenpath route={[{"x":1.5000986000000012,"y":-1.0441940000000614},{"x":1.5000986000000012,"y":-1.4999462000000676}]} />
<silkscreenpath route={[{"x":-1.499895400000014,"y":1.5000477999999475},{"x":-1.499895400000014,"y":1.044295600000055}]} />
<silkscreenpath route={[{"x":-1.499895400000014,"y":-1.0441940000000614},{"x":-1.499895400000014,"y":-1.4999462000000676}]} />
<silkscreenpath route={[{"x":1.5000986000000012,"y":1.5000477999999475},{"x":1.044346399999995,"y":1.5000477999999475}]} />
<silkscreenpath route={[{"x":-1.0441432000000077,"y":1.5000477999999475},{"x":-1.499895400000014,"y":1.5000477999999475}]} />
<silkscreenpath route={[{"x":-1.499895400000014,"y":-1.4999462000000676},{"x":-1.0441432000000077,"y":-1.4999462000000676}]} />
<silkscreenpath route={[{"x":1.044346399999995,"y":-1.4999462000000676},{"x":1.5000986000000012,"y":-1.4999462000000676}]} />
<silkscreenpath route={[{"x":-1.7399508000000878,"y":1.2513056000000233},{"x":-1.7200165108359897,"y":1.2500356000001602},{"x":-1.7399507999999742,"y":1.2487656000000698}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=871bf70eb5f842f5af27500461e35d8a&pn=C6331347",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}