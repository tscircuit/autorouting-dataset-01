import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL_SCK"],
  pin2: ["VDD"],
  pin3: ["NC6"],
  pin4: ["SPI_CS_N"],
  pin5: ["SPI_SDO"],
  pin6: ["NC5"],
  pin7: ["NC4"],
  pin8: ["NC3"],
  pin9: ["GND2"],
  pin10: ["CAP"],
  pin11: ["GND1"],
  pin12: ["NC2"],
  pin13: ["VDDIO"],
  pin14: ["NC1"],
  pin15: ["INT"],
  pin16: ["SDA_SDI"]
} as const

export const MMC5983MA_QFN16 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C404329"
  ]
}}
      manufacturerPartNumber="MMC5983MA_QFN16"
      footprint={
      <footprint>
    <smtpad
      pcbX="0.754mm"
      pcbY="1.498mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["1"]}
    />
    <smtpad
      pcbX="0.254mm"
      pcbY="1.498mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["2"]}
    />
    <smtpad
      pcbX="-0.246mm"
      pcbY="1.498mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["3"]}
    />
    <smtpad
      pcbX="-0.746mm"
      pcbY="1.498mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["4"]}
    />

    {/* Left row: pins 5–8 (no rot => horizontal pads) */}
    <smtpad
      pcbX="-1.508mm"
      pcbY="0.746mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["5"]}
    />
    <smtpad
      pcbX="-1.508mm"
      pcbY="0.246mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["6"]}
    />
    <smtpad
      pcbX="-1.508mm"
      pcbY="-0.254mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["7"]}
    />
    <smtpad
      pcbX="-1.508mm"
      pcbY="-0.754mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["8"]}
    />

    {/* Bottom row: pins 9–12 (rot=R270 => vertical pads) */}
    <smtpad
      pcbX="-0.746mm"
      pcbY="-1.506mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["9"]}
    />
    <smtpad
      pcbX="-0.246mm"
      pcbY="-1.506mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["10"]}
    />
    <smtpad
      pcbX="0.254mm"
      pcbY="-1.506mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["11"]}
    />
    <smtpad
      pcbX="0.754mm"
      pcbY="-1.506mm"
      layer="top"
      shape="pill"
      width="0.3mm"
      height="0.85mm"
      radius="0.1125mm"
      portHints={["12"]}
    />

    {/* Right row: pins 13–16 (rot=R180 => horizontal pads) */}
    <smtpad
      pcbX="1.496mm"
      pcbY="-0.764mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["13"]}
    />
    <smtpad
      pcbX="1.496mm"
      pcbY="-0.264mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["14"]}
    />
    <smtpad
      pcbX="1.496mm"
      pcbY="0.236mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["15"]}
    />
    <smtpad
      pcbX="1.496mm"
      pcbY="0.736mm"
      layer="top"
      shape="pill"
      width="0.85mm"
      height="0.3mm"
      radius="0.1125mm"
      portHints={["16"]}
    />
  </footprint>
      }
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=096e9116d2104692b1ea59750f4299d6&pn=C404329",
        rotationOffset: { x: 90, y: 270, z: 90 },
        positionOffset: { x: 0, y: 0, z: 2.2880209000000375 },
      }}
      {...props}
    />
  )
}