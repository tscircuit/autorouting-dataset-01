/** 1x3 pin header footprint. */
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["1"],
  pin2: ["2"],
  pin3: ["3"],
} as const

export const PinHeader1x3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={0.7}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3],
        },
      }}
      manufacturerPartNumber="CONN_041X03_NO_SILK"
      footprint={
        <footprint>
          {/* 0.1" spacing = 2.54mm between pins */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.54mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="2.54mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  )
}
